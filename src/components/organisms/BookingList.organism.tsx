import { BookingStatus } from '../../constants/types.constant';
import { formatDate } from '../../utils/helper.util';
import { BookingListItem } from '../molecules';

// TODO: Update this with data from BE
function BookingList() {
  return (
    <div>
      <BookingListItem
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
