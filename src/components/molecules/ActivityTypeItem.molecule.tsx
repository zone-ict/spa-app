import tw, { styled } from 'twin.macro';
import { formatCurrency } from '../../utils/helper.util';
import { Text } from '../atoms';

const Container = styled.div<{ isSelected?: boolean }>(({ isSelected }) => [
  tw`flex flex-col items-start w-full px-4 pt-2 pb-3 space-y-1 border border-gray-900 rounded-md`,
  !isSelected && tw`border-gray-300`,
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
