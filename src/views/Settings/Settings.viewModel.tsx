import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingsRoute from '../Bookings/Bookings.route';
import WorkshopsRoute from '../Workshops/Workshops.route';

function useNavigationHandler() {
  const navigate = useNavigate();

  const navigateToWorkshops = useCallback(() => {
    if (!WorkshopsRoute.path) return;
    navigate(WorkshopsRoute.path);
  }, [navigate]);

  const navigateToBookings = useCallback(() => {
    if (!BookingsRoute.path) return;
    navigate(BookingsRoute.path);
  }, [navigate]);

  return { navigateToWorkshops, navigateToBookings };
}

export default function useSettingsViewModel() {
  const navigations = useNavigationHandler();

  return { ...navigations };
}
