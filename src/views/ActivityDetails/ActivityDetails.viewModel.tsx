import { useCallback, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';
import { Activity } from '../../models/Activity.model';
import { getActivityByUid } from '../../services/firebase/collections/activities.collection';
import { fbAuth } from '../../services/firebase/firebase.service';
import { bookingCreationAction } from '../../stores/bookingCreation.store';
import BookingCreateRoute from '../BookingCreate/BookingCreate.route';

type PageState = {
  selectedActivityTypeUid: string;
};

function usePageState() {
  const [state, setState] = useState<PageState>({
    selectedActivityTypeUid: '',
  });

  const updateState = (newState: Partial<PageState>) => {
    setState((prev) => ({ ...prev, ...newState }));
  };

  return { state, updateState };
}

function useData() {
  const { pathname } = useLocation();

  const activityUid = pathname.split('/')[2];

  const { data, isLoading } = useQuery(['activity', activityUid], () =>
    getActivityByUid(activityUid),
  );

  return { activityData: data, activityIsLoading: isLoading };
}

function useNavigationHandlers(data: Activity | undefined) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user] = useAuthState(fbAuth);

  const navigateToCreateBooking = useCallback(
    (id: string) => {
      if (!BookingCreateRoute.path || !data || !user) return;

      dispatch(
        bookingCreationAction.startCreation({
          activityTypeUid: id,
          activityUid: data.uid,
          userUid: user.uid,
          workshopUid: data.workshop_uid,
        }),
      );

      navigate(BookingCreateRoute.path.replace(':id', id));
    },
    [data, dispatch, navigate, user],
  );

  return { navigateToCreateBooking };
}

export default function useActivityDetailsViewModel() {
  const pageState = usePageState();
  const data = useData();
  const navigationHandlers = useNavigationHandlers(data.activityData);
  const translator = useTranslator();

  return {
    ...pageState,
    ...data,
    ...navigationHandlers,
    translator,
  };
}
