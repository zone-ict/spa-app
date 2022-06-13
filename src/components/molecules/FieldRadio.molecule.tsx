import { styled } from 'twin.macro';
import { Radio, Text } from '../atoms';
import { RadioProps } from '../atoms/Radio.atom';

const Container = styled.button();

type Props = RadioProps & {
  label?: string;
  onClick?(): void;
};

function FieldRadio({ label, isSelected, onClick }: Props) {
  return (
    <button type="button" onClick={onClick}>
      <Radio isSelected={isSelected} />
      <Text.Label>{label}</Text.Label>
    </button>
  );
}

export default FieldRadio;
