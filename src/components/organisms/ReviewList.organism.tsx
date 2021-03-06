import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import tw from 'twin.macro';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';
import { ReviewRating } from '../../models/Review.model';
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
  const translator = useTranslator();
  return (
    <div tw="space-y-6">
      <Text.HeadingFive>{translator.translate('Reviews')}</Text.HeadingFive>
      {!data && (
        <>
          <SkeletonItem />
          <SkeletonItem />
        </>
      )}
      {data?.map((item) => (
        <ReviewItem date={item.date} rating={item.rating} comment={item.comment} />
      ))}
      {data?.length === 0 && (
        <Text.Small tw="text-gray-500">{translator.translate('No reviews yet.')}</Text.Small>
      )}
    </div>
  );
}
