import {
  ChevronRightIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from '@heroicons/react/solid';
import tw from 'twin.macro';
import { Text } from '../../components/atoms';
import { BottomBarMenus } from '../../components/molecules/BottomBar.molecule';
import { ActivityList } from '../../components/organisms';
import { WithTopBottomBar } from '../../components/templates';
import WithTopBar from '../../components/templates/WithTopBar.template';
import useSettingsViewModel from './Settings.viewModel';

const Gallery = tw.div`flex items-center space-x-2 overflow-x-auto`;
const Video = tw.video`h-[200px] bg-black`;
const Image = tw.img`h-[200px]`;
const Content = tw.div`flex flex-col p-4 pb-8 space-y-6`;
const Description = tw(Text.Small)`text-gray-500`;
const Contact = tw.div`flex flex-col`;
const Clickable = tw.div`cursor-pointer`;
const IconContainer = tw.div`w-5 h-5 flex-shrink-0 flex-grow-0 text-gray-400`;

const dummyGallery = [
  {
    type: 'video',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  },
  { type: 'image', url: 'https://via.placeholder.com/600x800' },
  { type: 'image', url: 'https://via.placeholder.com/800x600' },
  { type: 'image', url: 'https://via.placeholder.com/500x700' },
  { type: 'image', url: 'https://via.placeholder.com/400x500' },
  { type: 'image', url: 'https://via.placeholder.com/600x800' },
  { type: 'image', url: 'https://via.placeholder.com/500' },
];

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
