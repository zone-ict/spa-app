import React from 'react';
import WorkshopListItem from '../molecules/WorkshopListItem.molecule';
import 'twin.macro';

type Props = {
  // TODO: data from BE
  onItemClick?(): void;
};

const dummyData = [
  { image: 'https://via.placeholder.com/500', name: 'Activity Provider Name - Two Line Example' },
  { image: 'https://via.placeholder.com/500', name: 'Activity Provider Name - Two Line Example' },
  { image: 'https://via.placeholder.com/500', name: 'Activity Provider Name - Two Line Example' },
  { image: 'https://via.placeholder.com/500', name: 'Activity Provider Name - Two Line Example' },
];

function WorkshopList({ onItemClick }: Props) {
  return (
    <div tw="grid grid-cols-2 gap-4 p-4">
      {/** TODO: replace dummy data */}
      {dummyData.map((workshop) => (
        <WorkshopListItem image={workshop.image} name={workshop.name} onClick={onItemClick} />
      ))}
    </div>
  );
}

export default WorkshopList;
