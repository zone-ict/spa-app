import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingCreateRoute from '../BookingCreate/BookingCreate.route';

function useNavigationHandlers() {
  const navigate = useNavigate();

  const navigateToCreateBooking = useCallback(
    (id: string) => {
      if (!BookingCreateRoute.path) return;

      navigate(BookingCreateRoute.path.replace(':id', id));
    },
    [navigate],
  );

  return { navigateToCreateBooking };
}

export default function useActivityDetailsViewModel() {
  const navigationHandlers = useNavigationHandlers();

  return {
    ...navigationHandlers,
  };
}
