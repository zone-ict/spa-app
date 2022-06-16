import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';
import React, { Fragment, useState } from 'react';
import tw from 'twin.macro';
import { Text, Transition } from '../atoms';

const dummyLanguages = [
  { name: 'English', code: 'en' },
  { name: 'Bahasa Indonesia', code: 'id' },
];

export default function LanguageSelect() {
  // TODO: Update this to use data from FireStore
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <Listbox value={selectedIndex} onChange={setSelectedIndex}>
        <div tw="relative">
          <Listbox.Button tw="relative">
            <Text.Small tw="truncate text-gray-500">
              {dummyLanguages[selectedIndex].name}
            </Text.Small>
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
            <Listbox.Options tw="absolute z-10 py-1 max-h-60 w-[calc(100% + 40px)] text-left overflow-auto bg-white text-sm drop-shadow-lg focus:outline-none">
              {dummyLanguages.map((item, index) => (
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
