import 'twin.macro';
import { BottomBarMenus } from '../../components/molecules/BottomBar.molecule';
import { WithTopBottomBar } from '../../components/templates';
import useSettingsViewModel from './Settings.viewModel';

function WorkshopDetails() {
  const { navigateToWorkshops, navigateToBookings } = useSettingsViewModel();

  return (
    <WithTopBottomBar
      hideBackButton
      onWorkshopsClicked={navigateToWorkshops}
      onBookingsClicked={navigateToBookings}
      activeMenu={BottomBarMenus.Settings}
      pageTitle="Settings"
    />
  );
}

export default WorkshopDetails;
