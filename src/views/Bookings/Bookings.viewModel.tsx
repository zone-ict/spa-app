import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingDetailsRoute from '../BookingDetails/BookingDetails.route';
import WorkshopsRoute from '../Workshops/Workshops.route';

function useNavigationHandler() {
  const navigate = useNavigate();

  const navigateToWorkshops = useCallback(() => {
    if (!WorkshopsRoute.path) return;
    navigate(WorkshopsRoute.path);
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
