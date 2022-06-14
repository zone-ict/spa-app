import tw, { styled } from 'twin.macro';

const Button = styled.button<{ danger?: boolean }>(({ danger }) => [
  tw`w-full bg-gray-900 text-white py-3`,
  tw`text-base leading-5 text-center font-medium`,
  tw`disabled:bg-gray-300`,
  danger && tw`bg-red-500`,
]);

export default Button;
