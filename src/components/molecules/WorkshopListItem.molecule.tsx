import React from 'react';
import tw from 'twin.macro';
import { Text } from '../atoms';

const Container = tw.div`flex flex-col items-stretch cursor-pointer`;
const Image = tw.img`h-[20vh] object-cover`;

type Props = {
  image: string;
  name: string;
  onClick?(): void;
};

function WorkshopListItem({ image, name, onClick }: Props) {
  return (
    <Container onClick={onClick}>
      <Image src={image} alt="Workshop" />
      <Text.Small tw="py-2 text-center">{name}</Text.Small>
    </Container>
  );
}

export default WorkshopListItem;
