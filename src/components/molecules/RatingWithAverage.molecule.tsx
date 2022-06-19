import 'twin.macro';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';
import { ReviewRating } from '../../models/Review.model';
import { Rating, Text } from '../atoms';

type Props = {
  avgRating: number;
  ratingCount: number;
};

export default function RatingWithAverage({ avgRating, ratingCount }: Props) {
  const translator = useTranslator();

  return (
    <div tw="flex items-center space-x-2">
      <Rating rating={Math.floor(avgRating) as ReviewRating} />
      <Text.Label tw="text-gray-500">
        {ratingCount
          ? `${avgRating} out of ${ratingCount}`
          : translator.translate('No ratings yet')}
      </Text.Label>
    </div>
  );
}
