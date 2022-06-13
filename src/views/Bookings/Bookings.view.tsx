import { BottomBarMenus } from '../../components/molecules/BottomBar.molecule';
import BookingList from '../../components/organisms/BookingList.organism';
import WithTopBottomBar from '../../components/templates/WithTopBottomBar.template';
import useBookingsViewModel from './Bookings.viewModel';

function Bookings() {
  const { navigateToWorkshops } = useBookingsViewModel();

  return (
    <WithTopBottomBar
      onInactiveMenuClick={navigateToWorkshops}
      hideBackButton
      pageTitle="My Bookings"
      activeMenu={BottomBarMenus.Bookings}
    >
      <BookingList />
    </WithTopBottomBar>
  );
}

export default Bookings;
