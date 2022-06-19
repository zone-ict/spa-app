import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';
import React, { Fragment, useEffect, useState } from 'react';
import tw from 'twin.macro';
import { Availability } from '../../hooks/useTranslator/useTranslator.hook';
import { Transition } from '../atoms';

const availableLanguages: Record<Availability, { name: string; code: Availability }> = {
  en: {
    name: 'English',
    code: Availability.en,
  },
  id: {
    name: 'Indonesia',
    code: Availability.id,
  },
  jp: {
    name: '日本',
    code: Availability.jp,
  },
};

const availableLanguagesArray = Object.values(availableLanguages);

const Text = tw.div`text-sm text-gray-900`;

type Props = {
  selectedLanguage: Availability;
  onChange: (language: Availability) => void;
};

export default function LanguageSelect({ selectedLanguage, onChange }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(
    availableLanguagesArray.findIndex(({ code }) => code === selectedLanguage),
  );

  useEffect(() => {
    if (selectedIndex != null) {
      onChange(availableLanguagesArray[selectedIndex].code);
    }
  }, [onChange, selectedIndex]);

  return (
    <div>
      <Listbox value={selectedIndex} onChange={setSelectedIndex}>
        <div tw="relative">
          <Listbox.Button tw="relative">
            <Text tw="truncate text-gray-500">{availableLanguages[selectedLanguage].name}</Text>
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
            <Listbox.Options tw="absolute z-10 py-1 max-h-60 w-[calc(100% + 40px)] text-left overflow-auto bg-white text-sm drop-shadow-lg focus:outline-none">
              {availableLanguagesArray.map((item, index) => (
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
