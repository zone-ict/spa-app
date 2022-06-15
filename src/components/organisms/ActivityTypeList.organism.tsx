import 'twin.macro';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';
import { Text } from '../atoms';
import { ActivityTypeItem } from '../molecules';

// TODO: Update this to mirror FireStore Data
type Props = {
  data: Array<{ name: string; price: number }>;
};

export default function ActivityTypeList({ data }: Props) {
  // Move this to props
  const translator = useTranslator();

  return (
    <div tw="space-y-6">
      <Text.HeadingFive>{translator.translate('Activity types')}</Text.HeadingFive>
      {/* TODO: Add logic to check whether the activity is selected */}
      {/* Probably just pass the selected ID from parent */}
      <div tw="space-y-2">
        {data.map((item) => (
          <ActivityTypeItem name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}
