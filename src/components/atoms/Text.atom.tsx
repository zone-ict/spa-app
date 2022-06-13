import tw from 'twin.macro';

const HeadingOne = tw.h1`text-4xl font-bold text-black`;
const HeadingTwo = tw.h2`text-3xl font-bold text-black`;
const HeadingThree = tw.h3`text-2xl font-bold text-black`;
const HeadingFour = tw.h4`text-lg font-medium text-gray-900`;
const HeadingFive = tw.h5`text-base font-medium text-gray-900`;
const Body = tw.p`text-base text-gray-900`;
const Small = tw.p`text-sm text-gray-900`;
const Label = tw.div`text-xs font-medium text-gray-900`;

export default Object.assign(Body, {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  Label,
  Small,
});
