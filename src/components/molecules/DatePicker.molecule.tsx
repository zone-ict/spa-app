import { useState } from 'react';
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
    ${tw`text-base bg-gray-100 pl-4`}
  }

  .rdp-caption_label {
    ${tw`text-sm m-0 p-0`}
  }

  .rdp-table {
    ${tw`table-fixed w-full max-w-full`}
  }

  .rdp-head_cell {
    ${tw`pt-4 pb-2 normal-case`}
  }

  .rdp-day {
    ${tw`text-xs text-gray-900 rounded-none font-medium mx-auto`}

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
    ${tw`border-none bg-transparent`}
  }
`;

export default function DatePicker() {
  const [selectedDay, setSelectedDay] = useState<Date>();

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
