import React from 'react';
import ActivityListItem from '../molecules/ActivityListItem.molecule';
import 'twin.macro';

type Props = {
  onItemClick?(): void;
};

const dummyData = [
  {
    thumbnail: 'https://via.placeholder.com/200',
    name: 'Activity Provider Name - Two Line Example',
    avgRating: 4.87,
    numRating: 17,
  },
  {
    thumbnail: 'https://via.placeholder.com/200',
    name: 'Activity Provider Name - Two Line Example',
    avgRating: 4.87,
    numRating: 17,
  },
];

function ActivityList({ onItemClick }: Props) {
  return (
    <div tw="space-y-4">
      {/** TODO: replace dummy data */}
      {dummyData.map((activity) => (
        <ActivityListItem
          thumbnail={activity.thumbnail}
          name={activity.name}
          avgRating={activity.avgRating}
          numRating={activity.numRating}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
}

export default ActivityList;
