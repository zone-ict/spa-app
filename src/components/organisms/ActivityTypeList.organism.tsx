import React from 'react';
import 'twin.macro';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';
import { ActivityType } from '../../models/Activity.model';
import { Skeleton, Text } from '../atoms';
import { ActivityTypeItem } from '../molecules';

type Props = {
  data?: ActivityType[];
  selectedId?: string;
  onClickItem?(id: string): void;
};

export default function ActivityTypeList({ data, selectedId = '', onClickItem = () => {} }: Props) {
  // Move this to props
  const translator = useTranslator();

  return (
    <div tw="space-y-6">
      <Text.HeadingFive>{translator.translate('Activity types')}</Text.HeadingFive>
      <div tw="space-y-2">
        {!data && (
          <>
            <Skeleton tw="h-[60px]" />
            <Skeleton tw="h-[60px]" />
          </>
        )}
        {data?.map((item) => (
          <ActivityTypeItem
            key={`${item.name}-${item.price}`}
            name={item.name}
            price={item.price}
            isSelected={item.uid === selectedId}
            uid={item.uid}
            onClick={() => onClickItem(item.uid)}
          />
        ))}
      </div>
    </div>
  );
}
