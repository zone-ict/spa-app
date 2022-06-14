import { BottomBarMenus } from '../../components/molecules/BottomBar.molecule';
import WorkshopList from '../../components/organisms/WorkshopList.organism';
import WithTopBottomBar from '../../components/templates/WithTopBottomBar.template';
import useHomeViewModel from './Home.viewModel';

export default function HomeView() {
  const { navigateToBookings, navigateToWorkshopDetails } = useHomeViewModel();

  return (
    <WithTopBottomBar
      hideBackButton
      onInactiveMenuClick={navigateToBookings}
      activeMenu={BottomBarMenus.Workshops}
      pageTitle="Workshops"
    >
      <WorkshopList onItemClick={navigateToWorkshopDetails} />
    </WithTopBottomBar>
  );
}
