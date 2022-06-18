import { StarIcon } from '@heroicons/react/solid';
import tw, { styled } from 'twin.macro';
import { ReviewRating } from '../../models/Review.model';

const Star = styled(StarIcon)<{ isActive?: boolean }>(({ isActive }) => [
  tw`w-5 h-5 text-gray-200`,
  isActive && tw`text-yellow-400`,
]);

type Props = {
  rating?: ReviewRating;
};

function Rating({ rating = 0 }: Props) {
  return (
    <div tw="inline-flex flex-row space-x-px">
      {[1, 2, 3, 4, 5].map((rate) => {
        const isActive = rate <= rating;
        return <Star key={rate} isActive={isActive} />;
      })}
    </div>
  );
}

export default Rating;
