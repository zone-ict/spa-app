import { Button } from '../../components/atoms';
import { BookingListItem } from '../../components/molecules';
import { BottomBarMenus } from '../../components/molecules/BottomBar.molecule';
import WithTopBottomBar from '../../components/templates/WithTopBottomBar.template';
import { BookingStatus } from '../../constants/types.constant';
import { formatDate } from '../../utils/helper.util';
import useHomeViewModel from './Home.viewModel';

export default function HomeView() {
  const { counter, navigateToBookings } = useHomeViewModel();

  return (
    <WithTopBottomBar
      hideBackButton
      onInactiveMenuClick={navigateToBookings}
      activeMenu={BottomBarMenus.Workshops}
      pageTitle="Home"
    >
      <div>Count:aa</div>
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
    </WithTopBottomBar>
  );
}
