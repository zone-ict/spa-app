import React from 'react';
import tw from 'twin.macro';
import svgs from '../../assets/svgs';
import { BookingRating } from '../../constants/types.constant';
import { Rating, Text } from '../atoms';

const Container = tw.div`flex items-center space-x-4`;
const Thumbnail = tw.img`w-20 self-stretch`;
const Icon = tw.img`w-6 h-6`;

type Props = {
  thumbnail: string;
  name: string;
  avgRating: number;
  numRating: number;
  onClick?(): void;
};

function ActivityListItem({ thumbnail, name, avgRating, numRating, onClick }: Props) {
  return (
    <Container onClick={onClick}>
      <Thumbnail src={thumbnail} alt="Activity Thumbnail" />
      <div tw="flex flex-col space-y-2">
        <Text.Small>{name}</Text.Small>
        <div tw="flex items-center space-x-2">
          <Rating rating={Math.floor(avgRating) as BookingRating} />
          <Text.Label tw="text-gray-500">
            {avgRating} out of {numRating}
          </Text.Label>
        </div>
      </div>
      <Icon src={svgs.ChevronRight} />
    </Container>
  );
}

export default ActivityListItem;
