import tw from 'twin.macro';
import { Button, Text } from '../../components/atoms';
import { RatingWithAverage } from '../../components/molecules';
import { ActivityTypeList, ReviewList } from '../../components/organisms';
import WithTopBar from '../../components/templates/WithTopBar.template';
import useActivityDetailsViewModel from './ActivityDetails.viewModel';

const Gallery = tw.div`flex items-center space-x-2 overflow-x-auto`;
const Video = tw.video`h-[200px] bg-black`;
const Image = tw.img`h-[200px]`;
const Content = tw.div`flex flex-col p-4 pb-[92px] space-y-6 relative`;
const Description = tw(Text.Small)`text-gray-500`;
const FooterButtonContainer = tw.div`fixed bottom-0 w-full max-w-md py-2 px-4 border-t border-t-gray-300 bg-white`;

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

const dummyActivities = [
  { name: 'Activity Name', price: 1500 },
  { name: 'Activity Name 2', price: 2000 },
  { name: "Activity Name 3 which is quite long for a name, but it's needed", price: 2000 },
];

function ActivityDetails() {
  const { navigateToCreateBooking } = useActivityDetailsViewModel();

  return (
    <WithTopBar pageTitle="Activity Detail">
      <Gallery>
        {/** TODO: replace dummy data */}
        {dummyGallery.map((item, index) => {
          if (item.type === 'video') {
            return (
              // TODO: Replace key with ID later
              <Video key={item.url} controls>
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </Video>
            );
          }
          // TODO: Replace key with ID Later
          return <Image key={`${item.url}-${index.toString()}`} src={item.url} />;
        })}
      </Gallery>

      <Content>
        <Text.HeadingFour>Activity Provider Name - Two Line Example</Text.HeadingFour>
        <RatingWithAverage avgRating={4.75} ratingCount={243} />
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra proin ac ultrices amet in
          adipiscing. Egestas enim nam sapien diam habitant quisque magna tincidunt ullamcorper.
        </Description>
        <hr />
        <ActivityTypeList data={dummyActivities} />
        <hr />
        <ReviewList />
      </Content>
      <FooterButtonContainer>
        <Button onClick={() => navigateToCreateBooking('1')}>Book a Schedule</Button>
      </FooterButtonContainer>
    </WithTopBar>
  );
}

export default ActivityDetails;
