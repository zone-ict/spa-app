import { BookingStatus } from '../../constants/types.constant';
import { formatDate } from '../../utils/helper.util';
import { BookingListItem } from '../molecules';

type Props = {
  // TODO: Update this with data from BE
  onItemClick?(): void;
};

function BookingList({ onItemClick }: Props) {
  return (
    <div>
      <BookingListItem
        onClick={onItemClick}
        date={formatDate(new Date())}
        location="Naha, Okinawa"
        status={BookingStatus.InProgress}
        title="Booking 1"
      />

      <BookingListItem
        date={formatDate(new Date())}
        location="Naha, Okinawa"
        status={BookingStatus.InProgress}
        title="Booking 1 Extralong stragalavilicious dsomething something Extralong stragalavilicious dsomething something  Extralong stragalavilicious dsomething something "
      />

      <BookingListItem
        date={formatDate(new Date())}
        location="Naha, Okinawa"
        status={BookingStatus.Cancelled}
        title="Booking 1 Extralong stragalavilicious dsomething something Extralong stragalavilicious dsomething something  Extralong stragalavilicious dsomething something "
      />

      <BookingListItem
        date={formatDate(new Date())}
        location="Naha, Okinawa"
        status={BookingStatus.Completed}
        title="Booking 1 Extralong stragalavilicious dsomething something Extralong stragalavilicious dsomething something  Extralong stragalavilicious dsomething something "
        rating={4}
      />

      <BookingListItem
        date={formatDate(new Date())}
        location="Naha, Okinawa"
        status={BookingStatus.Completed}
        title="Booking 1 Extralong stragalavilicious dsomething something Extralong stragalavilicious dsomething something  Extralong stragalavilicious dsomething something "
        rating={4}
      />

      <BookingListItem
        date={formatDate(new Date())}
        location="Naha, Okinawa"
        status={BookingStatus.Completed}
        title="Booking 1 Extralong stragalavilicious dsomething something Extralong stragalavilicious dsomething something  Extralong stragalavilicious dsomething something "
        rating={4}
      />

      <BookingListItem
        date={formatDate(new Date())}
        location="Naha, Okinawa"
        status={BookingStatus.Completed}
        title="Booking 1 Extralong stragalavilicious dsomething something Extralong stragalavilicious dsomething something  Extralong stragalavilicious dsomething something "
        rating={4}
      />

      <BookingListItem
        date={formatDate(new Date())}
        location="Naha, Okinawa"
        status={BookingStatus.Completed}
        title="Booking 1 Extralong stragalavilicious dsomething something Extralong stragalavilicious dsomething something  Extralong stragalavilicious dsomething something "
        rating={4}
      />

      <BookingListItem
        date={formatDate(new Date())}
        location="Naha, Okinawa"
        status={BookingStatus.Completed}
        title="Booking 1 Extralong stragalavilicious dsomething something Extralong stragalavilicious dsomething something  Extralong stragalavilicious dsomething something "
        rating={4}
      />

      <BookingListItem
        date={formatDate(new Date())}
        location="Naha, Okinawa"
        status={BookingStatus.Completed}
        title="Booking 1 Extralong stragalavilicious dsomething something Extralong stragalavilicious dsomething something  Extralong stragalavilicious dsomething something "
        rating={4}
      />

      <BookingListItem
        date={formatDate(new Date())}
        location="Naha, Okinawa"
        status={BookingStatus.Completed}
        title="Booking 1 Extralong stragalavilicious dsomething something Extralong stragalavilicious dsomething something  Extralong stragalavilicious dsomething something "
        rating={4}
      />

      <BookingListItem
        date={formatDate(new Date())}
        location="Naha, Okinawa"
        status={BookingStatus.Completed}
        title="Booking 1 Extralong stragalavilicious dsomething something Extralong stragalavilicious dsomething something  Extralong stragalavilicious dsomething something "
        rating={4}
      />

      <BookingListItem
        date={formatDate(new Date())}
        location="Naha, Okinawa"
        status={BookingStatus.Completed}
        title="Booking 1 Extralong stragalavilicious dsomething something Extralong stragalavilicious dsomething something  Extralong stragalavilicious dsomething something "
        rating={4}
      />
    </div>
  );
}

export default BookingList;
