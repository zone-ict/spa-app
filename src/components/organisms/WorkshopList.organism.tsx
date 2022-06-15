import React from 'react';
import 'twin.macro';
import { WorkshopItem } from '../molecules';
import { Workshop } from '../../models/Workshop.model';

type Props = {
  // TODO: data from BE
  data: Workshop[];
  onItemClick?(id: string): void;
};

function WorkshopList({ onItemClick = () => {}, data }: Props) {
  return (
    <div tw="grid grid-cols-2 gap-4 p-4">
      {data.map((workshop) => (
        <WorkshopItem
          key={workshop.uid}
          data={workshop}
          onClick={() => onItemClick(workshop.uid)}
        />
      ))}
    </div>
  );
}

export default WorkshopList;
