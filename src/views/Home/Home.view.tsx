import { BookingListItem } from '../../components/molecules';
import { BottomBarMenus } from '../../components/molecules/BottomBar.molecule';
import WithTopBottomBar from '../../components/templates/WithTopBottomBar.template';
import { BookingStatus } from '../../constants/types.constant';
import { formatDate } from '../../utils/helper.util';
import useHomeViewModel from './Home.viewModel';

export default function HomeView() {
  const { navigateToBookings } = useHomeViewModel();

  return (
    <WithTopBottomBar
      hideBackButton
      onInactiveMenuClick={navigateToBookings}
      activeMenu={BottomBarMenus.Workshops}
      pageTitle="Home"
    >
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
