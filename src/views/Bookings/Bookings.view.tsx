import { BottomBarMenus } from '../../components/molecules/BottomBar.molecule';
import BookingList from '../../components/organisms/BookingList.organism';
import WithTopBottomBar from '../../components/templates/WithTopBottomBar.template';
import { BookingStatus } from '../../models/Booking.model';
import useBookingsViewModel from './Bookings.viewModel';

const dummyData = [
  {
    title: 'Booking 1',
    location: 'Naha, Okinawa',
    status: BookingStatus.Booked,
    date: '12/06/2022',
  },
  {
    title: 'Booking 2',
    location: 'Naha, Okinawa',
    status: BookingStatus.Completed,
    date: '12/06/2022',
  },
];

function Bookings() {
  const { navigateToWorkshops, navigateToSettings, navigateToBookingDetails } =
    useBookingsViewModel();

  return (
    <WithTopBottomBar
      onWorkshopsClicked={navigateToWorkshops}
      onSettingsClicked={navigateToSettings}
      hideBackButton
      pageTitle="My Bookings"
      activeMenu={BottomBarMenus.Bookings}
    >
      <BookingList data={dummyData} onItemClick={navigateToBookingDetails} />
    </WithTopBottomBar>
  );
}

export default Bookings;
