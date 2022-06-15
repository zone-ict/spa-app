import tw, { styled } from 'twin.macro';
import { formatCurrency } from '../../utils/helper.util';
import { Text } from '../atoms';

const Container = styled.div<{ isSelected?: boolean }>(({ isSelected }) => [
  tw`flex w-full items-start flex-col space-y-1 pt-2 pb-3 px-4 border border-gray-900 rounded-md`,
  !isSelected && tw`border-gray-300`,
]);

type Props = {
  isSelected?: boolean;
  // TODO: Pass Activity Details from this
  onClick?(): void;
  name: string;
  price: number;
};

export default function ActivityTypeItem({ isSelected = false, onClick, name, price }: Props) {
  return (
    <Container onClick={onClick}>
      <Text.Small css={[!isSelected && tw`text-gray-400`]}>{name}</Text.Small>
      <Text.HeadingSix css={[!isSelected && tw`text-gray-400`]}>
        {formatCurrency(price)}
      </Text.HeadingSix>
    </Container>
  );
}
