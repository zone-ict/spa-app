import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingDetailsRoute from '../BookingDetails/BookingDetails.route';
import HomeRoute from '../Home/Home.route';
import SettingsRoute from '../Settings/Settings.route';

function useNavigationHandler() {
  const navigate = useNavigate();

  const navigateToWorkshops = useCallback(() => {
    if (!HomeRoute.path) return;
    navigate(HomeRoute.path);
  }, [navigate]);

  const navigateToSettings = useCallback(() => {
    if (!SettingsRoute.path) return;
    navigate(SettingsRoute.path);
  }, [navigate]);

  // TODO: Add ID as params to be passed to the workshop details page
  const navigateToBookingDetails = useCallback(() => {
    if (!BookingDetailsRoute.path) return;
    navigate(BookingDetailsRoute.path.replace(':id', '1'));
  }, [navigate]);

  return { navigateToWorkshops, navigateToSettings, navigateToBookingDetails };
}

export default function useBookingsViewModel() {
  const navigations = useNavigationHandler();

  return { ...navigations };
}
