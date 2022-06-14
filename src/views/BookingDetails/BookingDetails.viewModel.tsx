import { FormikConfig } from 'formik';
import { useCallback, useState } from 'react';
import { number, object, string } from 'yup';
import { CancelBookingFormSchema } from '../../components/organisms/CancelBookingForm.organism';
import { ReviewBookingFormSchema } from '../../components/organisms/ReviewBookingForm.organism';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';

// #region STATE

type BookingDetailState = {
  isCancelling: boolean;
  cancellationReason?: string;
  isReviewing: boolean;
  // TODO: Update this to use data from FireStore
  isCompleted: boolean;
  review?: {
    rating: number;
    comment?: string;
  };
};

type PageState = ReturnType<typeof useBookingDetailState>;

function useBookingDetailState() {
  const [state, setState] = useState<BookingDetailState>({
    isCancelling: false,
    isReviewing: false,
    // TODO: Update this to use data from FireAStore
    isCompleted: true,
    review: undefined,
  });

  const updateState = useCallback((newState: Partial<BookingDetailState>) => {
    setState((prev) => ({
      ...prev,
      ...newState,
    }));
  }, []);

  return { state, updateState };
}

// #endregion

// #region CANCEL BOOKING

// TODO: Just change state before integrating with FireStore
function useHandleSubmitCancelBooking(state: PageState) {
  const handleSubmit = (values: CancelBookingFormSchema) => {
    console.log('tono suprapto');

    state.updateState({
      cancellationReason: values.reason,
      isCancelling: false,
    });
  };

  return handleSubmit;
}

function useCancelBookingFormHandler(onSubmit: (values: CancelBookingFormSchema) => void) {
  const translator = useTranslator();

  const cancelBookingFormConfig: FormikConfig<CancelBookingFormSchema> = {
    initialValues: {
      reason: '',
    },
    validationSchema: object().shape({
      reason: string().required(translator.translate('Please enter a cancellation reason.')),
    }),
    validateOnChange: true,
    onSubmit,
  };

  return cancelBookingFormConfig;
}

// #endregion

// #region REVIEW

// TODO: Change to call FireStore service
function useHandleSubmitReviewBooking(state: PageState) {
  const handleSubmit = (values: ReviewBookingFormSchema) => {
    state.updateState({
      isReviewing: false,
      review: values,
    });
  };

  return handleSubmit;
}

function useReviewBookingFormHandler(onSubmit: (values: ReviewBookingFormSchema) => void) {
  const translator = useTranslator();

  const reviewBookingFormConfig: FormikConfig<ReviewBookingFormSchema> = {
    initialValues: {
      rating: 5,
      comment: '',
    },
    validationSchema: object().shape({
      rating: number().min(1).max(5).required(translator.translate('Please enter a rating.')),
      comment: string().min(
        20,
        translator.translate('Review Comment must be at least 20 characters.'),
      ),
    }),
    validateOnChange: true,
    onSubmit,
  };

  return reviewBookingFormConfig;
}

// #endregion

export default function useBookingDetailsViewModel() {
  const translator = useTranslator();
  const bookingDetailState = useBookingDetailState();

  // Cancel Booking
  const handleSubmitCancelBooking = useHandleSubmitCancelBooking(bookingDetailState);
  const cancelBookingFormHandler = useCancelBookingFormHandler(handleSubmitCancelBooking);

  // Review
  const handleSubmitReviewBooking = useHandleSubmitReviewBooking(bookingDetailState);
  const reviewBookingFormHandler = useReviewBookingFormHandler(handleSubmitReviewBooking);

  return {
    ...bookingDetailState,
    translator,
    cancelBookingFormHandler,
    reviewBookingFormHandler,
  };
}
