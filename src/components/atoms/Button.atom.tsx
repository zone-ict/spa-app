import tw, { styled } from 'twin.macro';

const baseButton = tw`bg-blue-500 text-white font-semibold transition-colors space-x-2`;
const solidButton = tw`border-0 text-white hover:bg-blue-600 active:bg-blue-700`;
const solidButtonDisabled = tw`bg-gray-300 cursor-default text-white`;
const outlinedButton = tw`border border-blue-500 text-blue-500 bg-transparent hover:(bg-blue-500 text-white) active:bg-blue-600`;
const outlinedButtonDisabled = tw`border border-gray-300 bg-transparent text-gray-300 cursor-default`;
const textButton = tw`text-blue-500 border-none bg-transparent hover:bg-transparent`;
const textButtonDisabled = tw`bg-transparent text-gray-300 cursor-default`;

type Props = {
  testID?: string;
  disabled?: boolean;
  flat?: boolean;
  small?: boolean;
};

const buttonSizes = {
  small: tw`text-sm py-1 px-2`,
  medium: tw`text-base py-2 px-4`,
};

const feature = {
  flat: tw`rounded-none`,
  rounded: tw`rounded-md`,
};

const Button = styled.button(({ disabled, flat, small }: Props) => [
  baseButton,
  small ? buttonSizes.small : buttonSizes.medium,
  flat ? feature.flat : feature.rounded,
  !disabled && solidButton,
  disabled && solidButtonDisabled,
]);

const Outlined = styled(Button)(({ disabled, flat, small }: Props) => [
  small ? buttonSizes.small : buttonSizes.medium,
  flat ? feature.flat : feature.rounded,
  !disabled && outlinedButton,
  disabled && outlinedButtonDisabled,
]);

const Text = styled(Button)(({ disabled, small }: Props) => [
  small ? buttonSizes.small : buttonSizes.medium,
  tw`p-0`,
  !disabled && textButton,
  disabled && textButtonDisabled,
]);

export default Object.assign(Button, { Outlined, Text });
