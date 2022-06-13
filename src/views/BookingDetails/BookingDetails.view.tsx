import React from 'react';
import tw, { styled } from 'twin.macro';
import { Chip, Radio, Text } from '../../components/atoms';
import WithTopBar from '../../components/templates/WithTopBar.template';
import { BookingStatus } from '../../constants/types.constant';
import useBookingDetailsViewModel from './BookingDetails.viewModel';

const Container = styled.div(() => [tw`p-4 space-y-6`]);

function BookingDetails() {
  const { state, updateState, handleCancelBooking, handleConfirmCancelBooking } =
    useBookingDetailsViewModel();

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
        <Text.Small tw="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel
          consectetur euismod, nisi nisl aliquet nisi, eget Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi,
          egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel
          consectetur euismod, nisi nisl aliquet nisi, eget
        </Text.Small>
        {/* TODO: Update this to it's own component */}
        {!state.isCancelling ? (
          <button onClick={handleCancelBooking} type="button" tw="bg-red-500 w-full py-3">
            <Text.HeadingFive tw="text-white">Cancel Booking</Text.HeadingFive>
          </button>
        ) : (
          <>
            <div tw="w-full border-t border-t-gray-300" />
            <Text.HeadingFive>Select a reason for cancellation</Text.HeadingFive>
            <div>
              <Radio />
              <Radio isSelected />
            </div>
          </>
        )}
      </Container>
    </WithTopBar>
  );
}

export default BookingDetails;
