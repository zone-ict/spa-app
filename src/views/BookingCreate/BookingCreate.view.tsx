import getUnixTime from 'date-fns/getUnixTime';
import 'twin.macro';
import { Button, Text } from '../../components/atoms';
import { ActivityVariantSelect, DatePicker } from '../../components/molecules';
import { WithTopBar } from '../../components/templates';
import useBookingCreateViewModel from './BookingCreate.viewModel';

type ActivityInfoProps = {
  photo_url: string;
  name: string;
  workshopName: string;
};

function ActivityInfo({ photo_url, name, workshopName }: ActivityInfoProps) {
  return (
    <div tw="flex space-x-4">
      <img tw="w-[80px] object-cover" src={photo_url} alt="Activity" />
      <div tw="w-3/4 space-y-2">
        <Text.Small tw="display[-webkit-box] -webkit-line-clamp[2] -webkit-box-orient[vertical] overflow-hidden">
          {name}
        </Text.Small>
        <p tw="text-gray-500 font-medium text-xs">{workshopName}</p>
      </div>
    </div>
  );
}

export default function BookingCreate() {
  const {
    creationData,
    navigateToHome,
    translate,
    handleActivityTypeChange,
    updateState,
    isValid,
    submitBookingMutation,
    state,
  } = useBookingCreateViewModel();

  if (!creationData) {
    return (
      <WithTopBar pageTitle={translate('Create Booking')}>
        <h1>{translate('Invalid app state')}</h1>
        <button type="button" onClick={navigateToHome}>
          {translate('Go back to main page')}
        </button>
      </WithTopBar>
    );
  }

  return (
    <WithTopBar pageTitle={translate('Create Booking')}>
      <div tw="p-4 space-y-6 pb-8">
        <ActivityInfo
          name={creationData.activityName}
          photo_url={creationData.activityPhotoUrl}
          workshopName={creationData.workshopName}
        />
        <ActivityVariantSelect
          activities={creationData.activityTypes}
          selectedId={creationData.activityTypeUid}
          onChange={handleActivityTypeChange}
        />
        <DatePicker onChange={(date) => updateState({ selectedDate: getUnixTime(date) })} />
        <Button
          disabled={!isValid}
          onClick={() =>
            submitBookingMutation.mutate({
              activity_date: state.selectedDate,
              activity_type_uid: creationData.activityTypeUid,
              activity_uid: creationData.activityUid,
              user_uid: creationData.userUid,
              workshop_uid: creationData.workshopUid,
            })
          }
        >
          {translate('Confirm Booking')}
        </Button>
      </div>
    </WithTopBar>
  );
}
