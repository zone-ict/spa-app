import React from 'react';
import { BookingStatus } from '../../models/Booking.model';
import { ReviewRating } from '../../models/Review.model';
import { formatDate } from '../../utils/helper.util';
import { Skeleton } from '../atoms';
import { BookingListItem } from '../molecules';
import 'twin.macro';

type Props = {
  // TODO: Update this with data from BE
  data?: {
    date: string;
    title: string;
    location: string;
    status: BookingStatus;
    rating?: ReviewRating;
  }[];
  onItemClick?(): void;
};

function BookingItemSkeleton() {
  return (
    <div tw="p-4 space-y-2 w-full border-b border-gray-300">
      <Skeleton tw="h-5" />
      <div tw="flex justify-between">
        <Skeleton tw="h-5 w-40" />
        <Skeleton tw="h-5 w-24" />
      </div>
    </div>
  );
}

function BookingList({ data, onItemClick }: Props) {
  return (
    <div>
      {!data && (
        <>
          <BookingItemSkeleton />
          <BookingItemSkeleton />
        </>
      )}
      {!!data &&
        data.map((item) => (
          <BookingListItem
            onClick={onItemClick}
            date={item.date}
            location={item.location}
            status={item.status}
            title={item.title}
            rating={item.rating}
          />
        ))}
    </div>
  );
}

export default BookingList;
