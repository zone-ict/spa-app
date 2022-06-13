import { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import assets from '../../assets';
import { BookingRating, BookingStatus } from '../../constants/types.constant';
import Chip from '../atoms/Chip.atom';

type Props = {
  title: string;
  date: string;
  location: string;
  status: BookingStatus;
  rating?: BookingRating;
};

const mappedText: Record<BookingStatus, string> = {
  [BookingStatus.InProgress]: 'In Progress',
  [BookingStatus.Completed]: 'Completed',
  [BookingStatus.Cancelled]: 'Cancelled',
};

const Container = styled.div(() => [tw``]);

const InfoContainer = styled.div(() => [tw``]);

const Title = styled.h2(() => [
  tw`display[-webkit-box] -webkit-line-clamp[2] -webkit-box-orient[vertical] overflow-hidden`,
]);

function BookingListItem({ title, date, location, status, rating }: Props) {
  const ratingComponent = useMemo(() => {
    if (!rating) return undefined;

    const ratings = [];
    for (let i = 1; i <= 5; i += 1) {
      if (i <= rating) {
        ratings.push(<img tw="w-3 h-3" src={assets.svgs.Star} key={i} alt="Yellow Star" />);
      } else {
        ratings.push(<img tw="w-3 h-3" src={assets.svgs.StarGray} key={i} alt="Gray Star" />);
      }
    }

    return ratings;
  }, [rating]);

  return (
    <Container tw="p-4 space-y-2 drop-shadow bg-white">
      <Title tw="text-sm text-gray-900">{title}</Title>
      {ratingComponent && <div tw="inline-flex space-x-1 items-center">{ratingComponent}</div>}
      <InfoContainer tw="inline-flex justify-between items-center w-full">
        <div tw="space-x-2 text-gray-500 text-xs">
          <span>{date}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
        <Chip status={status}>{mappedText[status]}</Chip>
      </InfoContainer>
    </Container>
  );
}

export default BookingListItem;
