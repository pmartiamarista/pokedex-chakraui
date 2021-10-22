import React from "react";
import { Box, Heading, Flex, Spacer } from "@chakra-ui/react";

import PokemonTypeTag from "./PokemonTypeTag";
import PokemonImg from "./PokemonImg";
import FlexRowWrapper from "./wrappers/FlexRowWrapper";
// import PokemonStats from "./PokemonStats";

const PokemonGridTileInfo = ({ style, data }) => {
  return (
    <Flex h={style.height} flexDirection="column" p={2}>
      <Box alignSelf="center" p={1}>
        <PokemonImg
          p={1}
          objectFit="cover"
          alt={data.name}
          h={style.height * 0.45}
          image={data.sprites.front_default}
        />
      </Box>
      <Box alignSelf="center" p={1}>
        <Heading as="h4" size="xs">
          {data.name?.toUpperCase()}
        </Heading>
      </Box>
      <Spacer />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
      >
        {FlexRowWrapper(
          data.types.map(({ type: { url, name } }) => (
            <PokemonTypeTag {...{ key: name, name, url }} />
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default PokemonGridTileInfo;
