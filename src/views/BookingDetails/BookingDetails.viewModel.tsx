import { useState } from 'react';

type BookingDetailState = {
  isCancelling: boolean;
  cancellationReason?: string;
};

function useBookingDetailState() {
  const [state, setState] = useState<BookingDetailState>({
    isCancelling: false,
  });

  const updateState = (newState: Partial<BookingDetailState>) => {
    setState((prev) => ({
      ...prev,
      ...newState,
    }));
  };

  return { state, updateState };
}

function useCancelBookingHandler(bookingDetailState: ReturnType<typeof useBookingDetailState>) {
  const [cancelText, setCancelText] = useState('');

  const handleCancelTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCancelText(e.target.value);
  };

  const handleCancelBooking = () => {
    bookingDetailState.updateState({
      isCancelling: true,
    });
  };

  const handleConfirmCancelBooking = () => {
    bookingDetailState.updateState({
      cancellationReason: cancelText,
    });
  };

  return { cancelText, handleCancelTextChange, handleCancelBooking, handleConfirmCancelBooking };
}

export default function useBookingDetailsViewModel() {
  const bookingDetailState = useBookingDetailState();
  const cancelBookingHandler = useCancelBookingHandler(bookingDetailState);

  return { ...bookingDetailState, ...cancelBookingHandler };
}
