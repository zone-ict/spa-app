import 'twin.macro';
import { BookingRating } from '../../constants/types.constant';
import { Rating, Text } from '../atoms';

type Props = {
  avgRating: number;
  ratingCount: number;
};

export default function RatingWithAverage({ avgRating, ratingCount }: Props) {
  return (
    <div tw="flex items-center space-x-2">
      <Rating rating={Math.floor(avgRating) as BookingRating} />
      <Text.Label tw="text-gray-500">
        {avgRating} out of {ratingCount}
      </Text.Label>
    </div>
  );
}
