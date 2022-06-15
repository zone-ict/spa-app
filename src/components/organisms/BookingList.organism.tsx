import fromUnixTime from 'date-fns/fromUnixTime';
import { Booking } from '../../models/Booking.model';
import { ReviewRating } from '../../models/Review.model';
import { formatDate } from '../../utils/helper.util';
import { BookingListItem } from '../molecules';

type Props = {
  data: Booking[];
  onItemClick?(id: string): void;
};

function BookingList({ onItemClick = () => {}, data }: Props) {
  return (
    <div>
      {data.map((booking) => (
        <BookingListItem
          key={booking.uid}
          onClick={() => onItemClick(booking.uid)}
          date={formatDate(fromUnixTime(booking.activity_date))}
          location={booking.workshop_name}
          status={booking.status}
          title={booking.activity_name}
          rating={(booking.review_rating as ReviewRating) ?? undefined}
        />
      ))}
    </div>
  );
}

export default BookingList;
