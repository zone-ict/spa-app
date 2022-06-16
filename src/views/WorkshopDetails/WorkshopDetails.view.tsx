import { OfficeBuildingIcon, PhoneIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/solid';
import tw from 'twin.macro';
import { Skeleton, Text } from '../../components/atoms';
import { ActivityList } from '../../components/organisms';
import WithTopBar from '../../components/templates/WithTopBar.template';
import useWorkshopDetailsViewModel from './WorkshopDetails.viewModel';

const Gallery = tw.div`flex items-center space-x-2 overflow-x-auto`;
const Video = tw.video`h-[200px] bg-black`;
const Image = tw.img`h-[200px] bg-gray-200`;
const Content = tw.div`flex flex-col p-4 pb-8 space-y-6`;
const Description = tw(Text.Small)`text-gray-500`;
const Contact = tw.div`flex flex-col`;
const Clickable = tw.div`cursor-pointer`;
const IconContainer = tw.div`w-6 h-6 flex-shrink-0 flex-grow-0 text-gray-400`;

function ContactItem({
  icon,
  text,
  onClick,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
  onClick?(): void;
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
  const { goToMaps, callWorkshop, goToLink, goToActivityDetail, workshopData, workshopIsLoading } =
    useWorkshopDetailsViewModel();

  if (workshopIsLoading || !workshopData) {
    // TODO: Add loading skeleton
    return (
      <WithTopBar pageTitle="Workshop Detail">
        <Skeleton tw="h-[200px]" />
        <Content>
          <Skeleton tw="h-7 w-3/4" />
          <Skeleton tw="h-20" />
          <Contact>
            <ContactItem
              icon={<OfficeBuildingIcon tw="w-full h-full" />}
              text={<Skeleton tw="h-5" />}
            />
            <ContactItem icon={<PhoneIcon tw="w-full h-full" />} text={<Skeleton tw="h-5" />} />
            <ContactItem
              icon={<ShoppingBagIcon tw="w-full h-full" />}
              text={<Skeleton tw="h-5" />}
            />
          </Contact>
          <hr />
          <Text.HeadingFive>Activities</Text.HeadingFive>
          <ActivityList />
        </Content>
      </WithTopBar>
    );
  }

  return (
    <WithTopBar pageTitle="Workshop Detail">
      <Gallery>
        {/** TODO: replace dummy data */}
        {workshopData.gallery.map((item) => {
          if (item.type === 'VIDEO') {
            return (
              <Video controls key={item.url}>
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            );
          }
          return <Image key={item.url} src={item.url} />;
        })}
      </Gallery>
      <Content>
        <Text.HeadingFour>{workshopData.name}</Text.HeadingFour>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra proin ac ultrices amet in
          adipiscing. Egestas enim nam sapien diam habitant quisque magna tincidunt ullamcorper.
        </Description>
        <Contact>
          <ContactItem
            icon={<OfficeBuildingIcon tw="w-full h-full" />}
            text={workshopData.address}
            onClick={goToMaps}
          />
          <ContactItem
            icon={<PhoneIcon tw="w-full h-full" />}
            text={workshopData.phone_number}
            onClick={callWorkshop}
          />
          <ContactItem
            icon={<ShoppingBagIcon tw="w-full h-full" />}
            text={workshopData.shop_url}
            onClick={goToLink}
          />
        </Contact>
        <hr />
        <Text.HeadingFive>Activities</Text.HeadingFive>
        <ActivityList data={workshopData.activities} onItemClick={goToActivityDetail} />
      </Content>
    </WithTopBar>
  );
}

export default WorkshopDetails;
