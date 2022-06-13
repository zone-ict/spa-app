import { FormikConfig, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';
import { isPartOfEnum } from '../../utils/helper.util';
import { Button, Text, TextArea } from '../atoms';
import { FieldRadio } from '../molecules';

const Container = styled.div(() => [tw`space-y-6`]);

export type CancelBookingFormSchema = {
  reason: string;
};

type Props = {
  formConfig: FormikConfig<CancelBookingFormSchema>;
  translator: ReturnType<typeof useTranslator>;
};

enum CancellationReasons {
  WrongDate = 'I chose the wrong date',
  ChangeActivity = 'I want to choose another activity',
  ChangeLocation = 'I want to change location',
}

function CancelBookingForm({ formConfig, translator }: Props) {
  const { setFieldValue, values, handleSubmit, isValid, dirty, handleChange } =
    useFormik(formConfig);
  const [isOtherSelected, setIsOtherSelected] = useState(false);

  useEffect(() => {
    if (isPartOfEnum(values.reason, CancellationReasons)) {
      setIsOtherSelected(false);
    }
  }, [values.reason]);

  const handleRadioChange = (reason: string) => {
    setFieldValue('reason', reason).catch(() => {});
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Text.HeadingFive>
          {translator.translate('Select a reason for cancellation')}
        </Text.HeadingFive>
        <div tw="inline-flex flex-col space-y-2">
          {Object.entries(CancellationReasons).map(([, value]) => (
            <FieldRadio
              key={value}
              isSelected={values.reason === value}
              onClick={() => handleRadioChange(value)}
              label={translator.translate(value)}
            />
          ))}
          <FieldRadio
            isSelected={isOtherSelected}
            onClick={() => {
              setIsOtherSelected(true);
              setFieldValue('reason', '').catch(() => {});
            }}
            label="Other"
          />
        </div>
        {isOtherSelected && (
          <TextArea
            tw="w-full"
            placeholder={translator.translate('Please describe your reason in more detail')}
            name="reason"
            onChange={handleChange}
            rows={3}
          />
        )}
        <Button disabled={!dirty || !isValid} type="submit" danger>
          Confirm Cancellation
        </Button>
      </Container>
    </form>
  );
}

export default CancelBookingForm;
