import { memo } from 'react';
import { Tag } from "@chakra-ui/react";
import { pokemonTypeColor } from "utils/type-color";

const PokemonTypeTag = ({ name }) => (
  <Tag
    minWidth={"40%"}
    m={1}
    borderRadius="full"
    fontWeight="bold"
    justifyContent={"center"}
    alignContent={"center"}
    textTransform="capitalize"
    bgColor={pokemonTypeColor()[name].color}
    borderColor={pokemonTypeColor()[name].border}
    borderWidth={2}
    textColor="#FCFCFC"
  >
    {name}
  </Tag>
);

export default memo(PokemonTypeTag);
