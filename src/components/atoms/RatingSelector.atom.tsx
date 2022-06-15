import 'twin.macro';
import svgs from '../../assets/svgs';
import { ReviewRating } from '../../models/Review.model';

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
              <img
                tw="w-[30px] h-[30px]"
                src={isActive ? svgs.Star : svgs.StarGray}
                alt="Rating Item"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default RatingSelector;
