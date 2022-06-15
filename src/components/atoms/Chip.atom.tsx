import { CSSInterpolation } from '@emotion/serialize';
import tw, { styled } from 'twin.macro';
import { BookingStatus } from '../../models/Booking.model';

type Props = {
  status: BookingStatus;
};

const statusMapping: Record<BookingStatus, CSSInterpolation> = {
  [BookingStatus.Booked]: tw`text-blue-700 bg-blue-200`,
  [BookingStatus.InProgress]: tw`text-yellow-700 bg-yellow-200`,
  [BookingStatus.Completed]: tw`text-green-700 bg-green-200`,
  [BookingStatus.Cancelled]: tw`text-red-700 bg-red-200`,
};

const textMapping: Record<BookingStatus, string> = {
  [BookingStatus.Booked]: 'Booked',
  [BookingStatus.InProgress]: 'In Progress',
  [BookingStatus.Completed]: 'Completed',
  [BookingStatus.Cancelled]: 'Cancelled',
};

const Container = styled.div<Props>(({ status }) => [
  tw`font-semibold text-xs flex items-center justify-center text-center px-3 py-0.5 rounded-full`,
  statusMapping[status],
]);

export default function Chip({ status }: Props) {
  return <Container status={status}>{textMapping[status]}</Container>;
}
