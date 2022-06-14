import 'twin.macro';
import images from '../../assets/images';
import { BottomBarMenus } from '../../components/molecules/BottomBar.molecule';
import { WorkshopList } from '../../components/organisms';
import WithTopBottomBar from '../../components/templates/WithTopBottomBar.template';
import useHomeViewModel from './Home.viewModel';

// TODO: Replace this with the data from FireStore
const DUMMY_DATA = [
  {
    id: '1',
    name: 'Workshop 1 Extra long straglafilcious name asdhasuhdauiosdh aiopsudhjaosiudh aisud aoiusdh aiusdh ioausd ',
    photo: images.Placeholder,
  },
  {
    id: '1',
    name: 'Workshop 1',
    photo: images.Placeholder,
  },
  {
    id: '1',
    name: 'Workshop 1',
    photo: images.Placeholder,
  },
  {
    id: '1',
    name: 'Workshop 1',
    photo: images.Placeholder,
  },
  {
    id: '1',
    name: 'Workshop 1',
    photo: images.Placeholder,
  },
  {
    id: '1',
    name: 'Workshop 1',
    photo: images.Placeholder,
  },
  {
    id: '1',
    name: 'Workshop 1',
    photo: images.Placeholder,
  },
  {
    id: '1',
    name: 'Workshop 1',
    photo: images.Placeholder,
  },
  {
    id: '1',
    name: 'Workshop 1',
    photo: images.Placeholder,
  },
  {
    id: '1',
    name: 'Workshop 1',
    photo: images.Placeholder,
  },
  {
    id: '1',
    name: 'Workshop 1',
    photo: images.Placeholder,
  },
];

export default function HomeView() {
  const { navigateToBookings, navigateToWorkshopDetails } = useHomeViewModel();

  return (
    <WithTopBottomBar
      hideBackButton
      onInactiveMenuClick={navigateToBookings}
      activeMenu={BottomBarMenus.Workshops}
      pageTitle="Home"
    >
      <div tw="p-4">
        <WorkshopList onItemClick={navigateToWorkshopDetails} data={DUMMY_DATA} />
      </div>
    </WithTopBottomBar>
  );
}
