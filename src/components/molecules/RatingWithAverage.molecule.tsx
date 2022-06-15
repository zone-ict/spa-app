import 'twin.macro';
import { ReviewRating } from '../../models/Review.model';
import { Rating, Text } from '../atoms';

type Props = {
  avgRating: number;
  ratingCount: number;
};

export default function RatingWithAverage({ avgRating, ratingCount }: Props) {
  return (
    <div tw="flex items-center space-x-2">
      <Rating rating={Math.floor(avgRating) as ReviewRating} />
      <Text.Label tw="text-gray-500">
        {ratingCount ? `${avgRating} out of ${ratingCount}` : 'No ratings yet'}
      </Text.Label>
    </div>
  );
}
