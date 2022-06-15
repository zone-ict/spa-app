import 'twin.macro';
import { ReviewRating } from '../../models/Review.model';
import { Rating, Text } from '../atoms';

type Props = {
  date: string;
  rating: ReviewRating;
  comment?: string;
};

function ReviewItem({ date, rating, comment }: Props) {
  return (
    <div tw="flex flex-col space-y-2.5">
      <div tw="inline-flex items-center space-x-2.5">
        <Text.Label tw="text-gray-500">{date}</Text.Label>
        <Rating rating={rating} />
      </div>
      <Text.Small>{comment}</Text.Small>
    </div>
  );
}

export default ReviewItem;
