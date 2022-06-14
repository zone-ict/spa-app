import React from 'react';
import 'twin.macro';
import WorkshopListItem from '../molecules/WorkshopListItem.molecule';

type Props = {
  // TODO: data from BE
  onItemClick?(id: string): void;
};

const dummyData = [
  {
    id: '1',
    image: 'https://via.placeholder.com/500',
    name: 'Activity Provider Name - Two Line Example',
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/500',
    name: 'Activity Provider Name - Two Line Example',
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/500',
    name: 'Activity Provider Name - Two Line Example',
  },
  {
    id: '4',
    image: 'https://via.placeholder.com/500',
    name: 'Activity Provider Name - Two Line Example',
  },
];

function WorkshopList({ onItemClick = () => {} }: Props) {
  return (
    <div tw="grid grid-cols-2 gap-4 p-4">
      {/** TODO: replace dummy data */}
      {dummyData.map((workshop) => (
        <WorkshopListItem
          key={workshop.id}
          image={workshop.image}
          name={workshop.name}
          onClick={() => onItemClick(workshop.id)}
        />
      ))}
    </div>
  );
}

export default WorkshopList;
