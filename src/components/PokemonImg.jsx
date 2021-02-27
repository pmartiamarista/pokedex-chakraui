import { memo } from 'react';
import { Image } from "@chakra-ui/react";
import notFound from "assets/Unown.png";

const PokemonImg = ({ image, height, ...props }) => (
  <Image
    {...{
      loading: "lazy",
      src: image || notFound,
      webp: image || notFound,
      ...props,
    }}
  />
);

export default memo(PokemonImg);
