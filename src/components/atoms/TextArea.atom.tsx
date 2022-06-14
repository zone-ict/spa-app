import tw, { styled } from 'twin.macro';

const TextArea = styled.textarea(() => [
  tw`bg-gray-100 py-3 px-4 text-sm text-gray-900 placeholder:text-gray-400`,
]);

export default TextArea;
