import { ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import tw from 'twin.macro';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';
import { ReviewRating } from '../../models/Review.model';
import { Rating, Text } from '../atoms';

const Container = tw.div`flex items-center space-x-4 cursor-pointer`;
const Thumbnail = tw.img`w-20 flex-shrink-0 h-[70px] object-cover`;
const Icon = tw(ChevronRightIcon)`w-6 h-6 flex-shrink-0 text-gray-400`;

type Props = {
  thumbnail: string;
  name: string;
  avgRating?: number;
  numRating?: number;
  onClick?(id: string): void;
  uid: string;
};

function ActivityListItem({
  thumbnail,
  name,
  avgRating,
  numRating,
  uid,
  onClick = () => {},
}: Props) {
  const translator = useTranslator();

  return (
    // TODO: Pass id here
    <Container onClick={() => onClick(uid)}>
      <Thumbnail src={thumbnail} alt="Activity Thumbnail" />
      <div tw="flex flex-col py-1 space-y-2 self-stretch">
        <Text.Small>{name}</Text.Small>
        <div tw="flex items-center space-x-2">
          <Rating
            rating={avgRating == null ? undefined : (Math.floor(avgRating) as ReviewRating)}
          />
          <Text.Label tw="text-gray-500">
            {avgRating
              ? `${avgRating} (${numRating ?? 0})`
              : translator.translate('No ratings yet')}
          </Text.Label>
        </div>
      </div>
      <Icon />
    </Container>
  );
}

export default ActivityListItem;
