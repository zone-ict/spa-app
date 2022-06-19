import { useCallback, useMemo } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth.hook';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';
import { getBookingsByUserUid } from '../../services/firebase/collections/bookings.collection';
import { fbAuth } from '../../services/firebase/firebase.service';
import BookingDetailsRoute from '../BookingDetails/BookingDetails.route';
import SettingsRoute from '../Settings/Settings.route';
import WorkshopsRoute from '../Workshops/Workshops.route';

function useData() {
  const [user] = useAuthState(fbAuth);

  const { data, isLoading } = useQuery(
    ['bookings', user?.uid],
    () => getBookingsByUserUid(user?.uid ?? ''),
    {
      enabled: !!user,
    },
  );

  const sortedByActivityDateData = useMemo(
    () =>
      data
        ? data.sort((a, b) => {
            const aDate = a.activity_date;
            const bDate = b.activity_date;
            return bDate - aDate;
          })
        : undefined,
    [data],
  );

  return { bookingsData: sortedByActivityDateData, bookingsIsLoading: isLoading };
}

function useNavigationHandlers() {
  const navigate = useNavigate();

  const navigateToWorkshops = useCallback(() => {
    if (!WorkshopsRoute.path) return;
    navigate(WorkshopsRoute.path);
  }, [navigate]);

  const navigateToSettings = useCallback(() => {
    if (!SettingsRoute.path) return;
    navigate(SettingsRoute.path);
  }, [navigate]);

  // TODO: Add ID as params to be passed to the workshop details page
  const navigateToBookingDetails = useCallback(
    (id: string) => {
      if (!BookingDetailsRoute.path) return;
      navigate(BookingDetailsRoute.path.replace(':id', id));
    },
    [navigate],
  );

  return { navigateToWorkshops, navigateToSettings, navigateToBookingDetails };
}

export default function useBookingsViewModel() {
  useAuth();
  const translator = useTranslator();
  const data = useData();
  const navigationHandlers = useNavigationHandlers();

  return { ...navigationHandlers, ...data, ...translator };
}
