import fromUnixTime from 'date-fns/fromUnixTime';
import isSameDay from 'date-fns/isSameDay';
import React, { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import images from '../../assets/images';
import { Button, Skeleton, Text } from '../../components/atoms';
import Chip from '../../components/atoms/Chip.atom';
import ReviewItem from '../../components/molecules/ReviewItem.molecule';
import { CancelBookingForm, ReviewBookingForm } from '../../components/organisms';
import WithTopBar from '../../components/templates/WithTopBar.template';
import { BookingStatus } from '../../models/Booking.model';
import { ReviewRating } from '../../models/Review.model';
import { formatDate } from '../../utils/helper.util';
import useBookingDetailsViewModel from './BookingDetails.viewModel';

const Container = styled.div(() => [tw`p-4 space-y-6`]);

const Description = styled(Text.Small)(() => [tw`text-gray-500`]);

const Divider = styled.div(() => [tw`w-full border-t border-t-gray-300`]);

function BookingDetails() {
  const {
    state,
    updateState,
    cancelBookingFormHandler,
    reviewBookingFormHandler,
    translator,
    bookingData,
    bookingIsLoading,
  } = useBookingDetailsViewModel();

  const { translate } = translator;

  const bottomBar = useMemo(() => {
    if (!bookingData || bookingIsLoading) {
      return null;
    }

    if (state.isReviewing) {
      return (
        <>
          <Divider />
          <ReviewBookingForm translator={translator} formConfig={reviewBookingFormHandler} />
        </>
      );
    }

    if (bookingData.review_uid) {
      return (
        <>
          <Divider />
          <Text.HeadingFive>{translate('Your review')}</Text.HeadingFive>
          <ReviewItem
            date={formatDate(fromUnixTime(bookingData.activity_date))}
            rating={bookingData.review_rating as ReviewRating}
            comment={bookingData.review_comment}
          />
        </>
      );
    }

    if (bookingData.status === BookingStatus.Completed && !bookingData.review_uid) {
      return (
        <Button
          onClick={() => {
            updateState({ isReviewing: true });
          }}
        >
          {translator.translate('Write a Review')}
        </Button>
      );
    }

    if (bookingData.status === BookingStatus.Cancelled) {
      return (
        <>
          <Divider />
          <Text.HeadingSix tw="font-normal">
            {translator.translate('Reason:')} {bookingData.cancel_reason}
          </Text.HeadingSix>
        </>
      );
    }

    return !state.isCancelling ? (
      <>
        <div tw="w-full border-t border-t-gray-300" />
        <Description>
          {translator.translate(
            bookingData.status === BookingStatus.InProgress
              ? 'Your QR code has been scanned. We hope you are having a great time!'
              : 'Show this QR code to the workshop staff during your booking schedule',
          )}
        </Description>
        <div tw="flex justify-center">
          <img src={images.Frame} alt="QR Code" />
        </div>
        {bookingData.status === BookingStatus.Booked && (
          <>
            <Button
              danger
              disabled={isSameDay(new Date(), fromUnixTime(bookingData.activity_date))}
              onClick={() => updateState({ isCancelling: true })}
              type="button"
            >
              {translator.translate('Cancel Booking')}
            </Button>
            {/* TODO: Add conditional here on booking date */}
            {isSameDay(new Date(), fromUnixTime(bookingData.activity_date)) && (
              <Description tw="text-center">
                {translator.translate('You can no longer cancel your booking on the chosen date.')}
              </Description>
            )}
          </>
        )}
      </>
    ) : (
      <>
        <Divider />
        <CancelBookingForm translator={translator} formConfig={cancelBookingFormHandler} />
      </>
    );
  }, [
    bookingData,
    bookingIsLoading,
    cancelBookingFormHandler,
    reviewBookingFormHandler,
    state.isCancelling,
    state.isReviewing,
    translate,
    translator,
    updateState,
  ]);

  if (bookingIsLoading || !bookingData) {
    return (
      <WithTopBar pageTitle={translate('Booking Detail')}>
        <Container>
          <Skeleton tw="h-7" />
          <Skeleton tw="h-6 w-1/3" />
          <div tw="flex space-x-4">
            <Skeleton tw="h-5 w-1/4" />
            <Skeleton tw="h-5 w-1/2" />
          </div>
          <Skeleton tw="h-40" />
        </Container>
      </WithTopBar>
    );
  }
  return (
    <WithTopBar pageTitle={translate('Booking Detail')}>
      <Container>
        <Text.HeadingFour>{bookingData.activity_name}</Text.HeadingFour>
        <Text>{bookingData.workshop_name}</Text>
        <div tw="inline-flex space-x-4 items-center">
          <Chip status={bookingData.status} />
          <Text.Small>{formatDate(fromUnixTime(bookingData.activity_date))}</Text.Small>
        </div>
        <Description>{bookingData.activity_description}</Description>
        {bottomBar}
      </Container>
    </WithTopBar>
  );
}

export default BookingDetails;
