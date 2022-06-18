// #region IMPORTS

import { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import assets from '../../assets';
import { BookingStatus } from '../../models/Booking.model';
import { ReviewRating } from '../../models/Review.model';
import { Rating } from '../atoms';
import Chip from '../atoms/Chip.atom';

// #endregion

// #region STYLED COMPONENTS

const Container = styled.div(() => [
  tw`p-4 space-y-2 bg-white drop-shadow`,
  tw`cursor-pointer select-none`,
]);

const InfoContainer = styled.div(() => [tw`inline-flex items-center justify-between w-full`]);

const Title = styled.h2(() => [
  tw`text-sm text-gray-900`,
  tw`display[-webkit-box] -webkit-line-clamp[2] -webkit-box-orient[vertical] overflow-hidden`,
]);

const RatingContainer = styled.div(() => [tw`inline-flex items-center space-x-1`]);

const DateLocationContainer = styled.div(() => [tw`space-x-2 text-xs text-gray-500`]);

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

// #endregion

// #region MAIN COMPONENT

function BookingListItem({ title, date, location, status, rating, onClick }: Props) {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
      {!!rating && <Rating rating={rating} />}
      <InfoContainer>
        <DateLocationContainer>
          <span>{date}</span>
          <span>•</span>
          <span>{location}</span>
        </DateLocationContainer>
        <Chip status={status} />
      </InfoContainer>
    </Container>
  );
}

// #endregion

export default BookingListItem;
