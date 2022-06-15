import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import tw from 'twin.macro';
import { ReviewRating } from '../../models/Review.model';
import { formatDate } from '../../utils/helper.util';
import { Skeleton, Text } from '../atoms';
import { ReviewItem } from '../molecules';

type Props = {
  data?: {
    date: string;
    rating: ReviewRating;
    comment: string;
  }[];
};

const PlaceholderStars = tw(StarIcon)`w-5 h-5 text-gray-200 animate-pulse`;
function SkeletonItem() {
  return (
    <div>
      <div tw="flex space-x-2">
        <Skeleton tw="h-4 w-1/3" />
        <div tw="flex">
          <PlaceholderStars />
          <PlaceholderStars />
          <PlaceholderStars />
          <PlaceholderStars />
          <PlaceholderStars />
        </div>
      </div>
      <Skeleton tw="h-5 mt-2.5" />
    </div>
  );
}

export default function ReviewList({ data }: Props) {
  return (
    <div tw="space-y-6">
      <Text.HeadingFive>Reviews</Text.HeadingFive>
      {!data && (
        <>
          <SkeletonItem />
          <SkeletonItem />
        </>
      )}
      {!!data &&
        data.map((item) => (
          <ReviewItem date={formatDate(item.date)} rating={item.rating} comment={item.comment} />
        ))}
    </div>
  );
}
