import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import React, { Fragment, useState } from 'react';
import tw from 'twin.macro';
import { formatCurrency } from '../../utils/helper.util';
import { Text } from '../atoms';

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
        <div tw="relative mt-1">
          <Listbox.Button tw="relative w-full cursor-default rounded-md border border-gray-900 bg-white py-2 pl-3 pr-10 text-left">
            <div tw="space-y-2">
              <Text.Small tw="block truncate">{dummyActivities[selectedIndex].name}</Text.Small>
              <Text.HeadingSix tw="block truncate">
                {formatCurrency(dummyActivities[selectedIndex].price)}
              </Text.HeadingSix>
            </div>
            <span tw="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon tw="h-5 w-5 text-gray-900" aria-hidden />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options tw="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base drop-shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {dummyActivities.map((item, index) => (
                <Listbox.Option
                  css={[
                    tw`relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900`,
                    selectedIndex === index && tw`bg-orange-100 text-orange-900`,
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
                        <span tw="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
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
