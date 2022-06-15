import 'twin.macro';
import svgs from '../../assets/svgs';
import { ReviewRating } from '../../models/Review.model';

type Props = {
  rating?: ReviewRating;
};

function Rating({ rating = 0 }: Props) {
  return (
    <div tw="inline-flex flex-row space-x-px">
      {[1, 2, 3, 4, 5].map((rate) => {
        const isActive = rate <= rating;
        return (
          <img
            key={rate}
            tw="w-4 h-4"
            src={isActive ? svgs.Star : svgs.StarGray}
            alt="Rating Item"
          />
        );
      })}
    </div>
  );
}

export default Rating;
