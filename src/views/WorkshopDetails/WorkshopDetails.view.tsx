import {
  ChevronRightIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from '@heroicons/react/solid';
import tw from 'twin.macro';
import svgs from '../../assets/svgs';
import { Text } from '../../components/atoms';
import { ActivityList } from '../../components/organisms';
import WithTopBar from '../../components/templates/WithTopBar.template';
import useWorkshopDetailsViewModel from './WorkshopDetails.viewModel';

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

function ContactItem({
  icon,
  text,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  onClick(): void;
}) {
  return (
    <Clickable onClick={onClick} tw="flex items-center space-x-4 py-2">
      <IconContainer>{icon}</IconContainer>
      <Text.Small tw="flex-auto">{text}</Text.Small>
      <IconContainer>
        <ChevronRightIcon tw="w-full h-full" />
      </IconContainer>
    </Clickable>
  );
}

function WorkshopDetails() {
  const { goToMaps, callWorkshop, goToLink, goToActivityDetail } = useWorkshopDetailsViewModel();

  return (
    <WithTopBar pageTitle="Workshop Detail">
      <Gallery>
        {/** TODO: replace dummy data */}
        {dummyGallery.map((item) => {
          if (item.type === 'video') {
            return (
              <Video controls>
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            );
          }
          return <Image src={item.url} />;
        })}
      </Gallery>
      <Content>
        <Text.HeadingFour>Activity Provider Name - Two Line Example</Text.HeadingFour>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra proin ac ultrices amet in
          adipiscing. Egestas enim nam sapien diam habitant quisque magna tincidunt ullamcorper.
        </Description>
        <Contact>
          <ContactItem
            icon={<OfficeBuildingIcon tw="w-full h-full" />}
            text="1 Lorem-23-4 Ipsum as Example Address, Lorem Ipsum, Dolor Sit Amet"
            onClick={goToMaps}
          />
          <ContactItem
            icon={<PhoneIcon tw="w-full h-full" />}
            text="+81-00-000-00000"
            onClick={callWorkshop}
          />
          <ContactItem
            icon={<ShoppingBagIcon tw="w-full h-full" />}
            text="https://link.to.shop"
            onClick={goToLink}
          />
        </Contact>
        <hr />
        <Text.HeadingFive>Activities</Text.HeadingFive>
        <ActivityList onItemClick={goToActivityDetail} />
      </Content>
    </WithTopBar>
  );
}

export default WorkshopDetails;
