import { useCallback, useEffect, useMemo, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { AnyAction, Dispatch } from 'redux';
import { RootState } from '../../app/store/store.app';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';
import { ActivityType } from '../../models/Activity.model';
import {
  createBooking,
  CreateBookingParams,
} from '../../services/firebase/collections/bookings.collection';
import { bookingCreationAction, BookingCreationStore } from '../../stores/bookingCreation.store';
import BookingsRoute from '../Bookings/Bookings.route';
import WorkshopsRoute from '../Workshops/Workshops.route';

type PageState = {
  selectedDate: number;
};

function usePageState() {
  const [state, setState] = useState<PageState>({
    selectedDate: 0,
  });

  const updateState = (newState: Partial<PageState>) => {
    setState((prev) => ({ ...prev, ...newState }));
  };

  return { state, updateState };
}

function useNavigationHandlers() {
  const navigate = useNavigate();

  const navigateToHome = useCallback(() => {
    if (!WorkshopsRoute.path) return;
    navigate(WorkshopsRoute.path, { replace: true });
  }, [navigate]);

  return { navigateToHome, navigate };
}

function useParamsHandler(
  dispatch: Dispatch<AnyAction>,
  creationData: BookingCreationStore,
  pageState: PageState,
  navigate: NavigateFunction,
) {
  const queryClient = useQueryClient();

  const handleActivityTypeChange = useCallback(
    (activityType: ActivityType) => {
      dispatch(
        bookingCreationAction.updateActivityType({
          activityUid: activityType.uid,
        }),
      );
    },
    [dispatch],
  );

  const isValid = useMemo(() => {
    if (!pageState.selectedDate) return false;
    if (!creationData.activityTypeUid) return false;
    if (!creationData.activityUid) return false;
    if (!creationData.workshopUid) return false;
    if (!creationData.userUid) return false;

    return true;
  }, [
    creationData.activityTypeUid,
    creationData.activityUid,
    creationData.userUid,
    creationData.workshopUid,
    pageState.selectedDate,
  ]);

  const submitBookingMutation = useMutation(
    (params: CreateBookingParams) => createBooking(params),
    {
      onSuccess: async () => {
        if (!BookingsRoute.path) return;
        navigate(BookingsRoute.path);
        await queryClient.invalidateQueries('bookings');
      },
    },
  );

  return { handleActivityTypeChange, isValid, submitBookingMutation };
}

export default function useBookingCreateViewModel() {
  const navigationHandlers = useNavigationHandlers();
  const dispatch = useDispatch();
  const translator = useTranslator();
  const pageState = usePageState();
  const creationData = useSelector((state: RootState) => state.bookingCreation);
  const paramsHandler = useParamsHandler(
    dispatch,
    creationData,
    pageState.state,
    navigationHandlers.navigate,
  );

  useEffect(
    // Disabled because we're cleaning up the store when navigating away from the page.
    // eslint-disable-next-line arrow-body-style
    () => {
      return () => {
        dispatch(bookingCreationAction.stopCreation());
      };
    },
    [dispatch],
  );

  return {
    translator,
    creationData,
    ...navigationHandlers,
    ...paramsHandler,
    ...pageState,
  };
}
