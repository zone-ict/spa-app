import 'twin.macro';
import { Workshop } from '../../models/Workshop.model';
import { Text } from '../atoms';

type Props = {
  data: Workshop;
  onClick?(id: string): void;
};

function WorkshopItem({ data, onClick = () => {} }: Props) {
  return (
    <button type="button" tw="space-y-2 inline-flex flex-col" onClick={() => onClick(data.id)}>
      <img src={data.photo} alt={`Workshop ${data.name}`} />
      <Text.Small tw="display[-webkit-box] -webkit-line-clamp[2] -webkit-box-orient[vertical] overflow-hidden">
        {data.name}
      </Text.Small>
    </button>
  );
}

export default WorkshopItem;
