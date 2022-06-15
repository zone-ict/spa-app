import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth.hook';
import { getWorkshops } from '../../services/firebase/collections/workshops.collection';
import BookingsRoute from '../Bookings/Bookings.route';
import WorkshopDetailsRoute from '../WorkshopDetails/WorkshopDetails.route';

function useNavigationHandlers() {
  const navigate = useNavigate();

  const navigateToBookings = useCallback(() => {
    if (!BookingsRoute.path) return;
    navigate(BookingsRoute.path);
  }, [navigate]);

  // TODO: Add ID as params to be passed to the workshop details page
  const navigateToWorkshopDetails = useCallback(
    (id: string) => {
      if (!WorkshopDetailsRoute.path) return;
      navigate(WorkshopDetailsRoute.path.replace(':id', id));
    },
    [navigate],
  );

  return { navigateToBookings, navigateToWorkshopDetails };
}

function useWorkshopsData() {
  const { data } = useQuery('workshops', getWorkshops);

  return { workshopData: data };
}

export default function useWorkshopsViewModel() {
  useAuth();
  const navigationHandlers = useNavigationHandlers();
  const workshopData = useWorkshopsData();

  return { ...navigationHandlers, ...workshopData };
}
