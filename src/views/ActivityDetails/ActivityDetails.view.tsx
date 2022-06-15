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
const FooterButtonContainer = tw.div`fixed bottom-0 w-full max-w-md py-2 px-[18px] border-t border-t-gray-300 bg-white`;

function ActivityDetails() {
  const {
    navigateToCreateBooking,
    activityData,
    activityIsLoading,
    translator,
    state,
    updateState,
  } = useActivityDetailsViewModel();

  if (activityIsLoading || !activityData) {
    return <WithTopBar pageTitle="Activity Detail">Loading...</WithTopBar>;
  }

  return (
    <WithTopBar pageTitle="Activity Detail">
      <Gallery>
        {activityData.gallery.map((item) => {
          if (item.type === 'VIDEO') {
            return (
              // TODO: Replace key with ID later
              <Video key={item.url} controls>
                <source src={item.url} type="video/mp4" />
                {translator.translate('Your browser does not support the video tag.')}
              </Video>
            );
          }
          return <Image key={item.url} src={item.url} />;
        })}
      </Gallery>

      <Content>
        <Text.HeadingFour>{activityData.name}</Text.HeadingFour>
        <RatingWithAverage
          avgRating={activityData.average_rating ?? 0}
          ratingCount={activityData.ratings_count ?? 0}
        />
        <Description>{activityData.description}</Description>
        <hr />
        <ActivityTypeList
          selectedId={state.selectedActivityTypeUid}
          data={activityData.activity_types}
          onClickItem={(uid) => updateState({ selectedActivityTypeUid: uid })}
        />
        <hr />
        <ReviewList />
      </Content>
      <FooterButtonContainer>
        <Button onClick={() => navigateToCreateBooking('1')}>
          {translator.translate('Book a Translation')}
        </Button>
      </FooterButtonContainer>
    </WithTopBar>
  );
}

export default ActivityDetails;
