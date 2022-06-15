import { BottomBarMenus } from '../../components/molecules/BottomBar.molecule';
import BookingList from '../../components/organisms/BookingList.organism';
import WithTopBottomBar from '../../components/templates/WithTopBottomBar.template';
import useBookingsViewModel from './Bookings.viewModel';

function Bookings() {
  const {
    navigateToWorkshops,
    navigateToSettings,
    navigateToBookingDetails,
    bookingsData,
    bookingsIsLoading,
  } = useBookingsViewModel();

  if (!bookingsData || bookingsIsLoading) {
    <WithTopBottomBar
      onWorkshopsClicked={navigateToWorkshops}
      onSettingsClicked={navigateToSettings}
      hideBackButton
      pageTitle="My Bookings"
      activeMenu={BottomBarMenus.Bookings}
    >
      <h1>Loading...</h1>
    </WithTopBottomBar>;
  }

  return (
    <WithTopBottomBar
      onWorkshopsClicked={navigateToWorkshops}
      onSettingsClicked={navigateToSettings}
      hideBackButton
      pageTitle="My Bookings"
      activeMenu={BottomBarMenus.Bookings}
    >
      <BookingList data={bookingsData ?? []} onItemClick={navigateToBookingDetails} />
    </WithTopBottomBar>
  );
}

export default Bookings;
