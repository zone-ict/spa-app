import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingsRoute from '../Bookings/Bookings.route';
import WorkshopDetailsRoute from '../WorkshopDetails/WorkshopDetails.route';

function useNavigationHandler() {
  const navigate = useNavigate();

  const navigateToBookings = useCallback(() => {
    if (!BookingsRoute.path) return;
    navigate(BookingsRoute.path);
  }, [navigate]);

  // TODO: Add ID as params to be passed to the workshop details page
  const navigateToWorkshopDetails = useCallback(() => {
    if (!WorkshopDetailsRoute.path) return;
    navigate(WorkshopDetailsRoute.path.replace(':id', '1'));
  }, [navigate]);

  return { navigateToBookings, navigateToWorkshopDetails };
}

export default function useHomeViewModel() {
  const navigations = useNavigationHandler();

  return { ...navigations };
}
