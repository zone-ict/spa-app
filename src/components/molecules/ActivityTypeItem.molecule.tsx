import tw, { styled } from 'twin.macro';
import { formatCurrency } from '../../utils/helper.util';
import { Text } from '../atoms';

const Container = styled.div<{ isSelected?: boolean }>(({ isSelected }) => [
  tw`flex flex-col items-start w-full px-4 py-3 space-y-2 text-gray-500 border border-gray-300 rounded-md`,
  isSelected && tw`text-gray-900 border-gray-900`,
]);

type Props = {
  isSelected?: boolean;
  onClick?(uid: string): void;
  name: string;
  price: number;
  uid: string;
};

export default function ActivityTypeItem({
  isSelected = false,
  onClick = () => {},
  name,
  price,
  uid,
}: Props) {
  return (
    <Container isSelected={isSelected} onClick={() => onClick(uid)}>
      <Text.Small css={[!isSelected && tw`text-gray-400`]}>{name}</Text.Small>
      <Text.HeadingSix css={[!isSelected && tw`text-gray-400`]}>
        {formatCurrency(price)}
      </Text.HeadingSix>
    </Container>
  );
}
