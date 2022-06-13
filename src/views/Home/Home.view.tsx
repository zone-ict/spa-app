import { Button } from '../../components/atoms';
import { BookingListItem } from '../../components/molecules';
import CenteredContent from '../../components/templates/CenteredContent.template';
import { BookingStatus } from '../../constants/types.constant';
import { formatDate } from '../../utils/helper.util';
import useHomeViewModel from './Home.viewModel';

export default function HomeView() {
  const { counter } = useHomeViewModel();

  return (
    <CenteredContent>
      <h1>Home</h1>
      <div>Count:</div>
      <div>{counter.count}</div>

      <Button type="button" onClick={counter.increment}>
        Increment
      </Button>

      <Button type="button" onClick={counter.decrement}>
        Decrement
      </Button>

      <Button.Outlined type="button" onClick={counter.reset}>
        Reset
      </Button.Outlined>

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
    </CenteredContent>
  );
}
