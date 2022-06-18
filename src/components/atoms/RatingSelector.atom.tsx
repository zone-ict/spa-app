import { StarIcon } from '@heroicons/react/solid';
import tw, { styled } from 'twin.macro';
import { ReviewRating } from '../../models/Review.model';

const Star = styled(StarIcon)<{ isActive?: boolean }>(({ isActive }) => [
  tw`w-10 h-10 text-gray-200`,
  isActive && tw`text-yellow-400`,
]);

type Props = {
  onRatingClicked?(rating: ReviewRating): void;
  value?: ReviewRating;
};

function RatingSelector({ onRatingClicked, value = 5 }: Props) {
  return (
    <div tw="flex justify-center">
      <div tw="space-x-2.5">
        {[1, 2, 3, 4, 5].map((rating) => {
          const isActive = rating <= value;
          return (
            <button
              key={rating}
              type="button"
              onClick={() => onRatingClicked && onRatingClicked(rating as ReviewRating)}
            >
              <Star isActive={isActive} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default RatingSelector;
