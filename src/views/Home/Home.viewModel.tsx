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

  const navigateToWorkshopDetails = useCallback(
    (id: string) => {
      if (!WorkshopDetailsRoute.path) return;
      navigate(WorkshopDetailsRoute.path.replace(':id', id));
    },
    [navigate],
  );

  return { navigateToBookings, navigateToWorkshopDetails };
}

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}

export default function useHomeViewModel() {
  const counter = useCounter();
  const navigationHandler = useNavigationHandler();

  return {
    counter,
    ...navigationHandler,
  };
}
