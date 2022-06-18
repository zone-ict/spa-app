import React from 'react';
import 'twin.macro';
import { WorkshopItem } from '../molecules';
import { Workshop } from '../../models/Workshop.model';
import { Skeleton } from '../atoms';

type Props = {
  // TODO: data from BE
  data?: Workshop[];
  onItemClick?(id: string): void;
};

function SkeletonItem() {
  return (
    <div tw="space-y-2">
      <Skeleton tw="h-[20vh] w-full" />
      <Skeleton tw="h-5 w-full" />
    </div>
  );
}

function WorkshopList({ onItemClick = () => {}, data }: Props) {
  return (
    <div tw="grid grid-cols-2 gap-4 p-4">
      {!data && (
        <>
          <SkeletonItem />
          <SkeletonItem />
          <SkeletonItem />
          <SkeletonItem />
        </>
      )}
      {data?.map((workshop) => (
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
