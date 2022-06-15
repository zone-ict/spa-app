import React from 'react';
import 'twin.macro';
import { Activity } from '../../models/Activity.model';
import { Skeleton } from '../atoms';
import ActivityListItem from '../molecules/ActivityListItem.molecule';

type Props = {
  onItemClick?(id: string): void;
  data?: Activity[];
};
function ActivityList({ onItemClick, data }: Props) {
  return (
    <div tw="space-y-4">
      {!data && (
        <>
          <Skeleton tw="h-[70px]" />
          <Skeleton tw="h-[70px]" />
        </>
      )}
      {!!data &&
        data.map((activity) => (
          <ActivityListItem
            key={activity.uid}
            thumbnail={activity.thumbnail_url}
            name={activity.name}
            avgRating={activity.average_rating ?? 0}
            numRating={activity.ratings_count ?? 0}
            onClick={onItemClick}
          />
        ))}
    </div>
  );
}

export default ActivityList;
