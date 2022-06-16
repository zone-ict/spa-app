import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import tw, { styled } from 'twin.macro';

const DayPickerContainer = styled.div`
  .rdp {
    ${tw`m-0`}
  }

  .rdp-month {
    ${tw`w-full`}
  }

  .rdp-nav button {
    ${tw`rounded-none`}

    :hover {
      ${tw`bg-gray-200`}
    }

    :focus {
      ${tw`bg-gray-200 border-transparent`}
    }
  }

  .rdp-caption {
    ${tw`pl-4 text-base bg-gray-100`}
  }

  .rdp-caption_label {
    ${tw`p-0 m-0 text-sm`}
  }

  .rdp-table {
    ${tw`w-full max-w-full table-fixed`}
  }

  .rdp-head_cell {
    ${tw`pt-4 pb-2 normal-case`}
  }

  .rdp-day {
    ${tw`mx-auto text-xs font-medium text-gray-900 rounded-none`}

    :hover {
      ${tw`bg-gray-100`}
    }

    :focus {
      ${tw`bg-transparent border-gray-900`}
    }
  }

  .rdp-day_outside {
    ${tw`text-gray-300`}
  }

  .rdp-day_selected {
    ${tw`text-white bg-gray-900`}

    :hover, :focus {
      ${tw`text-white bg-gray-900`}
    }
  }

  .rdp-outline {
    ${tw`bg-transparent border-none`}
  }
`;

type Props = {
  onChange(date: Date): void;
};

export default function DatePicker({ onChange }: Props) {
  const [selectedDay, setSelectedDay] = useState<Date>();

  useEffect(() => {
    if (selectedDay) {
      onChange(selectedDay);
    }
  }, [onChange, selectedDay]);

  return (
    <div>
      <DayPickerContainer>
        <DayPicker
          selected={selectedDay}
          onSelect={setSelectedDay}
          styles={{
            head: {
              width: 'full',
            },
          }}
          mode="single"
          fixedWeeks
          showOutsideDays
        />
      </DayPickerContainer>
    </div>
  );
}
