import React from 'react';
import tw from 'twin.macro';
import svgs from '../../assets/svgs';
import { ReviewRating } from '../../models/Review.model';
import { Rating, Text } from '../atoms';

const Container = tw.div`flex items-center space-x-4`;
const Thumbnail = tw.img`w-20 self-stretch`;
const Icon = tw.img`w-6 h-6`;

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
  return (
    // TODO: Pass id here
    <Container onClick={() => onClick(uid)}>
      <Thumbnail src={thumbnail} alt="Activity Thumbnail" />
      <div tw="flex w-full flex-col space-y-2">
        <Text.Small>{name}</Text.Small>
        <div tw="flex items-center space-x-2">
          <Rating
            rating={avgRating == null ? undefined : (Math.floor(avgRating) as ReviewRating)}
          />
          <Text.Label tw="text-gray-500">
            {avgRating ? `${avgRating} (${numRating ?? 0})` : 'No ratings yet'}
          </Text.Label>
        </div>
      </div>
      <Icon src={svgs.ChevronRight} />
    </Container>
  );
}

export default ActivityListItem;
