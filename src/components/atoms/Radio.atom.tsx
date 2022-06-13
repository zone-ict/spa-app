import tw, { styled } from 'twin.macro';

const Container = styled.div(() => [
  tw`w-5 h-5 rounded-full border border-gray-700 p-[3px]`,
  tw`cursor-pointer`,
]);

const Child = styled.div(() => [tw`w-full h-full bg-gray-700 rounded-full`]);

export type RadioProps = {
  isSelected?: boolean;
};

function Radio({ isSelected }: RadioProps) {
  return <Container>{isSelected && <Child />}</Container>;
}

export default Radio;
