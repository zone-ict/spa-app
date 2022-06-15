import React from 'react';
import 'twin.macro';
import { Workshop } from '../../models/Workshop.model';
import WorkshopListItem from '../molecules/WorkshopListItem.molecule';

type Props = {
  // TODO: data from BE
  data: Workshop[];
  onItemClick?(id: string): void;
};

function WorkshopList({ onItemClick = () => {}, data }: Props) {
  return (
    <div tw="grid grid-cols-2 gap-4 p-4">
      {data.map((workshop) => (
        <WorkshopListItem
          key={workshop.uid}
          image={workshop.main_photo_url}
          name={workshop.name}
          onClick={() => onItemClick(workshop.uid)}
        />
      ))}
    </div>
  );
}

export default WorkshopList;
