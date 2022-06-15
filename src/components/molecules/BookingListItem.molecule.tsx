// #region IMPORTS

import { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import assets from '../../assets';
import { BookingStatus } from '../../models/Booking.model';
import { ReviewRating } from '../../models/Review.model';
import Chip from '../atoms/Chip.atom';

// #endregion

// #region STYLED COMPONENTS

const Container = styled.div(() => [
  tw`p-4 space-y-2 border-b border-gray-300 bg-white`,
  tw`select-none cursor-pointer`,
]);

const InfoContainer = styled.div(() => [tw`inline-flex justify-between items-center w-full`]);

const Title = styled.h2(() => [
  tw`text-sm text-gray-900`,
  tw`display[-webkit-box] -webkit-line-clamp[2] -webkit-box-orient[vertical] overflow-hidden`,
]);

const RatingContainer = styled.div(() => [tw`inline-flex space-x-1 items-center`]);

const DateLocationContainer = styled.div(() => [tw`space-x-2 text-gray-500 text-xs`]);

// #endregion

// #region PROPS & DATA

type Props = {
  title: string;
  date: string;
  location: string;
  status: BookingStatus;
  rating?: ReviewRating;
  // TODO: Update this to better mirror data from BE
  onClick?(): void;
};

const mappedText: Record<BookingStatus, string> = {
  [BookingStatus.Booked]: 'Booked',
  [BookingStatus.InProgress]: 'In Progress',
  [BookingStatus.Completed]: 'Completed',
  [BookingStatus.Cancelled]: 'Cancelled',
};

// #endregion

// #region MAIN COMPONENT

function BookingListItem({ title, date, location, status, rating, onClick }: Props) {
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
    <Container onClick={onClick}>
      <Title>{title}</Title>
      {ratingComponent && <RatingContainer>{ratingComponent}</RatingContainer>}
      <InfoContainer>
        <DateLocationContainer>
          <span>{date}</span>
          <span>•</span>
          <span>{location}</span>
        </DateLocationContainer>
        <Chip status={status}>{mappedText[status]}</Chip>
      </InfoContainer>
    </Container>
  );
}

// #endregion

export default BookingListItem;
