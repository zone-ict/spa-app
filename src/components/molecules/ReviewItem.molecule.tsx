import 'twin.macro';
import { BookingRating } from '../../constants/types.constant';
import { Rating, Text } from '../atoms';

type Props = {
  date: string;
  rating: BookingRating;
  comment?: string;
};

function ReviewItem({ date, rating, comment }: Props) {
  return (
    <div tw="flex flex-col space-y-2.5">
      <div tw="inline-flex items-center space-x-2.5">
        <Text.Label tw="text-gray-500">{date}</Text.Label>
        <Rating rating={rating} />
      </div>
      <Text>{comment}</Text>
    </div>
  );
}

export default ReviewItem;
