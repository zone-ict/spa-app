import { FormikConfig } from 'formik';
import { useCallback, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useLocation } from 'react-router-dom';
import { number, object, string } from 'yup';
import { CancelBookingFormSchema } from '../../components/organisms/CancelBookingForm.organism';
import { ReviewBookingFormSchema } from '../../components/organisms/ReviewBookingForm.organism';
import useAuth from '../../hooks/useAuth/useAuth.hook';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';
import { Booking } from '../../models/Booking.model';
import {
  cancelBooking,
  CancelBookingParams,
  getBookingByUid,
} from '../../services/firebase/collections/bookings.collection';
import {
  createReview,
  CreateReviewParams,
} from '../../services/firebase/collections/reviews.collection';

// #region STATE

type BookingDetailState = {
  isCancelling: boolean;
  cancellationReason?: string;
  isReviewing: boolean;
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

// #region DATA

function useData(uid: string) {
  const { data, isLoading } = useQuery(['bookings', uid], () => getBookingByUid(uid));

  return { bookingData: data, bookingIsLoading: isLoading };
}

// #endregion

// #region CANCEL BOOKING

// TODO: Just change state before integrating with FireStore
function useHandleSubmitCancelBooking(state: PageState, uid: string) {
  const queryClient = useQueryClient();

  const cancelReasonMutation = useMutation((params: CancelBookingParams) => cancelBooking(params), {
    onSuccess: async (_, params) => {
      await queryClient.invalidateQueries(['bookings', params.uid]);
    },
  });

  const handleSubmit = (values: CancelBookingFormSchema) => {
    state.updateState({
      cancellationReason: values.reason,
      isCancelling: false,
    });
    cancelReasonMutation.mutate({
      reason: values.reason,
      uid,
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

function useHandleSubmitReviewBooking(state: PageState, booking?: Booking) {
  const queryClient = useQueryClient();

  const createReviewMutation = useMutation((params: CreateReviewParams) => createReview(params), {
    onSuccess: async (_, params) => {
      await queryClient.invalidateQueries(['bookings', params.booking_uid]);
      state.updateState({
        isReviewing: false,
      });
    },
  });

  const handleSubmit = (values: ReviewBookingFormSchema) => {
    if (!booking) return;

    createReviewMutation.mutate({
      booking_uid: booking.uid,
      activity_uid: booking.activity_uid,
      comment: values.comment,
      rating: values.rating,
      user_uid: booking.user_uid,
      workshop_uid: booking.workshop_uid,
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
  useAuth();

  const { pathname } = useLocation();

  const bookingId = pathname.split('/')[2];

  const translator = useTranslator();
  const bookingDetailState = useBookingDetailState();
  const data = useData(bookingId);

  // Cancel Booking
  const handleSubmitCancelBooking = useHandleSubmitCancelBooking(bookingDetailState, bookingId);
  const cancelBookingFormHandler = useCancelBookingFormHandler(handleSubmitCancelBooking);

  // Review
  const handleSubmitReviewBooking = useHandleSubmitReviewBooking(
    bookingDetailState,
    data.bookingData,
  );
  const reviewBookingFormHandler = useReviewBookingFormHandler(handleSubmitReviewBooking);

  return {
    ...bookingDetailState,
    ...data,
    translator,
    cancelBookingFormHandler,
    reviewBookingFormHandler,
  };
}
