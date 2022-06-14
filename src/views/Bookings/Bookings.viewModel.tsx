import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingDetailsRoute from '../BookingDetails/BookingDetails.route';
import HomeRoute from '../Home/Home.route';

function useNavigationHandler() {
  const navigate = useNavigate();

  const navigateToWorkshops = useCallback(() => {
    if (!HomeRoute.path) return;
    navigate(HomeRoute.path);
  }, [navigate]);

  // TODO: Add ID as params to be passed to the workshop details page
  const navigateToBookingDetails = useCallback(() => {
    if (!BookingDetailsRoute.path) return;
    navigate(BookingDetailsRoute.path.replace(':id', '1'));
  }, [navigate]);

  return { navigateToWorkshops, navigateToBookingDetails };
}

export default function useBookingsViewModel() {
  const navigations = useNavigationHandler();

  return { ...navigations };
}
