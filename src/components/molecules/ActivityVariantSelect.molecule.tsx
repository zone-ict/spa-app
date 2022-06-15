import { Listbox } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import React, { Fragment, useState } from 'react';
import tw from 'twin.macro';
import { formatCurrency } from '../../utils/helper.util';
import { Text, Transition } from '../atoms';

const dummyActivities = [
  { name: 'Activity Name', price: 1500 },
  { name: 'Activity Name 2', price: 2000 },
  { name: "Activity Name 3 which is quite long for a name, but it's needed", price: 2000 },
];

export default function ActivityVariantSelect() {
  // TODO: Update this to use data from FireStore
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <Listbox value={selectedIndex} onChange={setSelectedIndex}>
        <div tw="relative">
          <Listbox.Button tw="relative w-full rounded-md border border-gray-900 bg-white pt-2 pb-3 pl-4 pr-10 text-left">
            <div tw="space-y-1">
              <Text.Small tw="truncate">{dummyActivities[selectedIndex].name}</Text.Small>
              <Text.HeadingSix tw="truncate">
                {formatCurrency(dummyActivities[selectedIndex].price)}
              </Text.HeadingSix>
            </div>
            <span tw="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon tw="h-5 w-5 text-gray-900" aria-hidden />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter={tw`transition ease-in duration-200`}
            enterFrom={tw`opacity-0`}
            enterTo={tw`opacity-100`}
            leave={tw`transition ease-in duration-200`}
            leaveFrom={tw`opacity-100`}
            leaveTo={tw`opacity-0`}
          >
            <Listbox.Options tw="absolute z-10 max-h-60 w-full overflow-auto bg-white text-sm drop-shadow-lg focus:outline-none">
              {dummyActivities.map((item, index) => (
                <Listbox.Option
                  css={[
                    tw`relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900`,
                    selectedIndex === index && tw`bg-gray-200`,
                  ]}
                  key={`${item.name}-${index.toString()}`}
                  value={index}
                >
                  {(props) => (
                    <>
                      <span
                        css={[tw`block truncate font-normal`, props.selected && tw`font-medium`]}
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
