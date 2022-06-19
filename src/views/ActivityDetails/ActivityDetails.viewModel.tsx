import { useCallback, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth.hook';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';
import { Activity } from '../../models/Activity.model';
import { getActivityByUid } from '../../services/firebase/collections/activities.collection';
import { getWorkshopDetail } from '../../services/firebase/collections/workshops.collection';
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

function useNavigationHandlers(data: Activity | undefined, state: PageState) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user] = useAuthState(fbAuth);

  const workshopQuery = useQuery(
    ['workshop', data?.workshop_uid],
    () => getWorkshopDetail(data?.workshop_uid ?? ''),
    {
      enabled: !!data,
    },
  );

  const navigateToCreateBooking = useCallback(
    (id: string) => {
      if (!BookingCreateRoute.path || !data || !user) return;

      if (!workshopQuery.data) return;

      const params = {
        activityTypeUid: state.selectedActivityTypeUid,
        activityUid: data.uid,
        userUid: user.uid,
        workshopUid: data.workshop_uid,
        activityTypes: data.activity_types,
        activityName: data.name,
        workshopName: workshopQuery.data.name,
        activityPhotoUrl: data.thumbnail_url,
      };

      dispatch(bookingCreationAction.startCreation(params));

      navigate(BookingCreateRoute.path.replace(':id', id));
    },
    [data, dispatch, navigate, state.selectedActivityTypeUid, user, workshopQuery.data],
  );

  return { navigateToCreateBooking };
}

export default function useActivityDetailsViewModel() {
  useAuth();
  const pageState = usePageState();
  const data = useData();
  const navigationHandlers = useNavigationHandlers(data.activityData, pageState.state);
  const translator = useTranslator();

  return {
    ...pageState,
    ...data,
    ...navigationHandlers,
    ...translator,
  };
}
