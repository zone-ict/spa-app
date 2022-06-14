import React, { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import images from '../../assets/images';
import { Button, Chip, Text } from '../../components/atoms';
import ReviewItem from '../../components/molecules/ReviewItem.molecule';
import { CancelBookingForm, ReviewBookingForm } from '../../components/organisms';
import WithTopBar from '../../components/templates/WithTopBar.template';
import { BookingRating, BookingStatus } from '../../constants/types.constant';
import { formatDate } from '../../utils/helper.util';
import useBookingDetailsViewModel from './BookingDetails.viewModel';

const Container = styled.div(() => [tw`p-4 space-y-6`]);

const Description = styled(Text.Small)(() => [tw`text-gray-500`]);

const Divider = styled.div(() => [tw`w-full border-t border-t-gray-300`]);

function BookingDetails() {
  const { state, updateState, cancelBookingFormHandler, reviewBookingFormHandler, translator } =
    useBookingDetailsViewModel();

  const bottomBar = useMemo(() => {
    if (state.isReviewing) {
      return (
        <>
          <Divider />
          <ReviewBookingForm translator={translator} formConfig={reviewBookingFormHandler} />
        </>
      );
    }

    if (state.review) {
      return (
        <>
          <Divider />
          <Text.HeadingFive>{translator.translate('Your review')}</Text.HeadingFive>
          <ReviewItem
            date={formatDate(new Date())}
            rating={state.review.rating as BookingRating}
            comment={state.review.comment}
          />
        </>
      );
    }

    if (state.isCompleted) {
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

    if (state.cancellationReason) {
      return (
        <>
          <Divider />
          <Text.HeadingSix tw="font-normal">
            {translator.translate('Reason:')} {state.cancellationReason}
          </Text.HeadingSix>
        </>
      );
    }

    return !state.isCancelling ? (
      <>
        <div tw="w-full border-t border-t-gray-300" />
        <Description>
          {translator.translate(
            'Show this QR code to the workshop staff during your booking schedule',
          )}
        </Description>
        <div tw="flex justify-center">
          <img src={images.Frame} alt="QR Code" />
        </div>
        <Button danger onClick={() => updateState({ isCancelling: true })} type="button">
          Cancel Booking
        </Button>
        {/* TODO: Add conditional here on booking date */}
        <Description tw="text-center">
          {translator.translate('You can no longer cancel your booking on the chosen date.')}
        </Description>
      </>
    ) : (
      <>
        <Divider />
        <CancelBookingForm translator={translator} formConfig={cancelBookingFormHandler} />
      </>
    );
  }, [
    cancelBookingFormHandler,
    reviewBookingFormHandler,
    state.cancellationReason,
    state.isCancelling,
    state.isCompleted,
    state.isReviewing,
    state.review,
    translator,
    updateState,
  ]);

  return (
    <WithTopBar pageTitle="Booking Detail">
      <Container>
        <Text.HeadingFour>Activity Name Example - It Can Be Multiple Lines Long</Text.HeadingFour>
        <Text>Provider Name</Text>
        <div tw="inline-flex space-x-4 items-center">
          {/* TODO: Update chip component to get text directly inside component */}
          <Chip status={BookingStatus.InProgress}>In Progress</Chip>
          <Text.Small>12 Jun 2022, 12:00 PM</Text.Small>
        </div>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel
          consectetur euismod, nisi nisl aliquet nisi, eget Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi,
          egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel
          consectetur euismod, nisi nisl aliquet nisi, eget
        </Description>
        {bottomBar}
      </Container>
    </WithTopBar>
  );
}

export default BookingDetails;
