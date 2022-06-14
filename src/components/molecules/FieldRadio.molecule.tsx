import tw, { styled } from 'twin.macro';
import { Radio, Text } from '../atoms';
import { RadioProps } from '../atoms/Radio.atom';

const Container = styled.button(() => [tw`inline-flex space-x-4 items-center`]);

type Props = RadioProps & {
  label?: string;
  onClick?(): void;
};

function FieldRadio({ label, isSelected, onClick }: Props) {
  return (
    <Container type="button" onClick={onClick}>
      <Radio isSelected={isSelected} />
      <Text.Small tw="font-normal">{label}</Text.Small>
    </Container>
  );
}

export default FieldRadio;
