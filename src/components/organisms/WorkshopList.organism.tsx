import 'twin.macro';
import { Workshop } from '../../models/Workshop.model';
import { WorkshopItem } from '../molecules';

type Props = {
  data: Workshop[];
  onItemClick?(id: string): void;
};

function WorkshopList({ data, onItemClick = () => {} }: Props) {
  return (
    <div tw="grid grid-cols-2 gap-4">
      {data.map((item, index) => (
        // TODO: Use id directly when we have data from FireStore
        // eslint-disable-next-line react/no-array-index-key
        <WorkshopItem key={index} data={item} onClick={onItemClick} />
      ))}
    </div>
  );
}

export default WorkshopList;
