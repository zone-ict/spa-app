import React from 'react';
import 'twin.macro';
import { WorkshopItem } from '../molecules';
import WorkshopListItem from '../molecules/WorkshopListItem.molecule';

type Props = {
  // TODO: data from BE
  onItemClick?(id: string): void;
};

const dummyData = [
  {
    id: '1',
    photo: 'https://via.placeholder.com/500x200',
    name: 'Activity Provider Name - Two Line Example',
  },
  {
    id: '2',
    photo: 'https://via.placeholder.com/500',
    name: 'Activity Provider Name - Two Line Example',
  },
  {
    id: '3',
    photo: 'https://via.placeholder.com/500',
    name: 'Activity Provider Name - Two Line Example',
  },
  {
    id: '4',
    photo: 'https://via.placeholder.com/500',
    name: 'Activity Provider Name - Two Line Example',
  },
  {
    id: '5',
    photo: 'https://via.placeholder.com/500',
    name: 'Activity Provider Name - Two Line Example',
  },
];

function WorkshopList({ onItemClick = () => {} }: Props) {
  return (
    <div tw="grid grid-cols-2 gap-4 p-4">
      {/** TODO: replace dummy data */}
      {dummyData.map((workshop) => (
        <WorkshopItem
          key={workshop.id}
          data={{
            id: workshop.id,
            name: workshop.name,
            photo: workshop.photo,
          }}
          onClick={() => onItemClick(workshop.id)}
        />
      ))}
    </div>
  );
}

export default WorkshopList;
