import tw, { styled } from 'twin.macro';
import { BookingStatus } from '../../models/Booking.model';

type Props = {
  status: BookingStatus;
};

const Chip = styled.div<Props>(({ status }) => [
  tw`font-semibold text-xs flex items-center justify-center text-center px-3 py-0.5 rounded-full`,
  status === BookingStatus.InProgress && tw`bg-blue-200 text-blue-700`,
  status === BookingStatus.Completed && tw`bg-green-200 text-green-700`,
  status === BookingStatus.Cancelled && tw`bg-red-200 text-red-700`,
]);

export default Chip;
