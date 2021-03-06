import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth.hook';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';
import { getWorkshops } from '../../services/firebase/collections/workshops.collection';
import BookingsRoute from '../Bookings/Bookings.route';
import SettingsRoute from '../Settings/Settings.route';
import WorkshopDetailsRoute from '../WorkshopDetails/WorkshopDetails.route';

function useNavigationHandlers() {
  const navigate = useNavigate();

  const navigateToBookings = useCallback(() => {
    if (!BookingsRoute.path) return;
    navigate(BookingsRoute.path);
  }, [navigate]);

  const navigateToWorkshopDetails = useCallback(
    (id: string) => {
      if (!WorkshopDetailsRoute.path) return;
      navigate(WorkshopDetailsRoute.path.replace(':id', id));
    },
    [navigate],
  );

  const navigateToSettings = useCallback(() => {
    if (!SettingsRoute.path) return;
    navigate(SettingsRoute.path);
  }, [navigate]);

  return { navigateToBookings, navigateToWorkshopDetails, navigateToSettings };
}

function useWorkshopsData() {
  const { data } = useQuery('workshops', getWorkshops);

  return { workshopData: data };
}

export default function useWorkshopsViewModel() {
  useAuth();
  const translator = useTranslator();
  const navigationHandlers = useNavigationHandlers();
  const workshopData = useWorkshopsData();

  return { ...navigationHandlers, ...workshopData, ...translator };
}
