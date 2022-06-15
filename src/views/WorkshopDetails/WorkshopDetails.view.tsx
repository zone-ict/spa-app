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
const Contact = tw.div` space-y-4`;
const Clickable = tw.div``;
const Icon = tw.img`w-6 h-6`;

function ContactItem({ icon, text, onClick }: { icon: string; text: string; onClick(): void }) {
  return (
    <Clickable onClick={onClick} tw="flex items-center space-x-4">
      <Icon src={icon} />
      <Text.Small tw="flex-auto">{text}</Text.Small>
      <Icon src={svgs.ChevronRight} />
    </Clickable>
  );
}

function WorkshopDetails() {
  const { goToMaps, callWorkshop, goToLink, goToActivityDetail, workshopData, workshopIsLoading } =
    useWorkshopDetailsViewModel();

  if (workshopIsLoading || !workshopData) {
    // TODO: Add loading skeleton
    return <WithTopBar pageTitle="Workshop Detail">Loading...</WithTopBar>;
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
          <ContactItem icon={svgs.OfficeBuilding} text={workshopData.address} onClick={goToMaps} />
          <ContactItem icon={svgs.Phone} text={workshopData.phone_number} onClick={callWorkshop} />
          <ContactItem icon={svgs.ShoppingBag} text={workshopData.shop_url} onClick={goToLink} />
        </Contact>
        <hr />
        <Text.HeadingFive>Activities</Text.HeadingFive>
        <ActivityList data={workshopData.activities} onItemClick={goToActivityDetail} />
      </Content>
    </WithTopBar>
  );
}

export default WorkshopDetails;
