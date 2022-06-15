import 'twin.macro';
import { Text } from '../../components/atoms';
import { ActivityVariantSelect, DatePicker } from '../../components/molecules';
import { WithTopBar } from '../../components/templates';

function ActivityInfo() {
  return (
    <div tw="flex space-x-4">
      <img tw="w-1/4 object-contain" src="https://via.placeholder.com/800x600" alt="Activity" />
      <div tw="w-3/4 space-y-2">
        <Text.Small tw="display[-webkit-box] -webkit-line-clamp[2] -webkit-box-orient[vertical] overflow-hidden">
          Name Test Long TEst Long Name Test Long TEst Long Name Test Long TEst Long
        </Text.Small>
        <p tw="text-gray-500 font-medium text-xs">Provider Name</p>
      </div>
    </div>
  );
}

export default function BookingCreate() {
  return (
    <WithTopBar pageTitle="Create Booking">
      <div tw="p-4">
        <ActivityInfo />
        <ActivityVariantSelect />
        <DatePicker />
      </div>
    </WithTopBar>
  );
}
