import 'twin.macro';
import { formatDate } from '../../utils/helper.util';
import { Text } from '../atoms';
import { ReviewItem } from '../molecules';

export default function ReviewList() {
  return (
    <div tw="space-y-6">
      <Text.HeadingFive>Reviews</Text.HeadingFive>
      <ReviewItem date={formatDate(new Date())} rating={5} comment="(No comment provided)" />
      <ReviewItem
        date={formatDate(new Date())}
        rating={4}
        comment="Some comment that is very cool! Yes yes yes"
      />
    </div>
  );
}
