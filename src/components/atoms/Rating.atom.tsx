import 'twin.macro';
import svgs from '../../assets/svgs';
import { BookingRating } from '../../constants/types.constant';

type Props = {
  rating: BookingRating;
};

function Rating({ rating }: Props) {
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
