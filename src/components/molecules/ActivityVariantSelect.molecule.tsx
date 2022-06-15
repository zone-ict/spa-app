import { Listbox } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import React, { Fragment, useEffect, useState } from 'react';
import tw from 'twin.macro';
import { ActivityType } from '../../models/Activity.model';
import { formatCurrency } from '../../utils/helper.util';
import { Text, Transition } from '../atoms';

type Props = {
  activities: ActivityType[];
  selectedId: string;
  onChange?(item: ActivityType): void;
};

export default function ActivityVariantSelect({
  activities,
  selectedId,
  onChange = () => {},
}: Props) {
  // TODO: Update this to use data from FireStore
  const [selectedIndex, setSelectedIndex] = useState(
    activities.findIndex((item) => item.uid === selectedId),
  );

  useEffect(() => {
    onChange(activities[selectedIndex]);
  }, [activities, onChange, selectedIndex]);

  return (
    <div>
      <Listbox value={selectedIndex} onChange={setSelectedIndex}>
        <div tw="relative">
          <Listbox.Button tw="relative w-full rounded-md border border-gray-900 bg-white pt-2 pb-3 pl-4 pr-10 text-left">
            <div tw="space-y-1">
              <Text.Small tw="truncate">{activities[selectedIndex].name}</Text.Small>
              <Text.HeadingSix tw="truncate">
                {formatCurrency(activities[selectedIndex].price)}
              </Text.HeadingSix>
            </div>
            <span tw="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon tw="h-5 w-5 text-gray-900" aria-hidden />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter={tw`transition duration-200 ease-in`}
            enterFrom={tw`opacity-0`}
            enterTo={tw`opacity-100`}
            leave={tw`transition duration-200 ease-in`}
            leaveFrom={tw`opacity-100`}
            leaveTo={tw`opacity-0`}
          >
            <Listbox.Options tw="absolute z-10 max-h-60 w-full overflow-auto bg-white text-sm drop-shadow-lg focus:outline-none">
              {activities.map((item, index) => (
                <Listbox.Option
                  css={[
                    tw`relative py-2 pl-10 pr-4 text-gray-900 cursor-default select-none`,
                    selectedIndex === index && tw`bg-gray-200`,
                  ]}
                  key={`${item.name}-${index.toString()}`}
                  value={index}
                >
                  {(props) => (
                    <>
                      <span
                        css={[tw`block font-normal truncate`, props.selected && tw`font-medium`]}
                      >
                        {item.name}
                      </span>
                      {props.selected && (
                        <span tw="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900">
                          <CheckIcon tw="w-5 h-5" />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
