import React from 'react';
import fromUnixTime from 'date-fns/fromUnixTime';
import { Booking } from '../../models/Booking.model';
import { ReviewRating } from '../../models/Review.model';
import { formatDate } from '../../utils/helper.util';
import { Skeleton } from '../atoms';
import { BookingListItem } from '../molecules';
import 'twin.macro';

type Props = {
  data?: Booking[];
  onItemClick?(id: string): void;
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

function BookingList({ onItemClick = () => {}, data }: Props) {
  return (
    <div>
      {!data && (
        <>
          <BookingItemSkeleton />
          <BookingItemSkeleton />
        </>
      )}
      {data?.map((booking) => (
        <BookingListItem
          key={booking.uid}
          onClick={() => onItemClick(booking.uid)}
          date={formatDate(fromUnixTime(booking.activity_date))}
          location={booking.workshop_name}
          status={booking.status}
          title={booking.activity_name}
          rating={(booking.review_rating as ReviewRating) ?? undefined}
        />
      ))}
    </div>
  );
}

export default BookingList;
