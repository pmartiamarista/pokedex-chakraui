import { useMemo } from "react";
import { Box, Heading, Flex, Spacer } from "@chakra-ui/react";

import PokemonTypeTag from "./PokemonTypeTag";
import PokemonImg from "./PokemonImg";
import FlexRowWrapper from "./wrappers/FlexRowWrapper";
// import PokemonStats from "./PokemonStats";

const PokemonGridTileInfo = ({ style, data }) => {
  return useMemo(
    () => (
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
          {/* {FlexRowWrapper(
            data.stats.map(({ stat, ...rest }) => (
              <PokemonStats
                {...{
                  key: stat.name,
                  name: stat.name,
                  value: rest.base_stat,
                }}
              />
            ))
          )} */}
          {FlexRowWrapper(
            data.types.map(({ type: { url, name } }) => (
              <PokemonTypeTag {...{ key: name, name, url }} />
            ))
          )}
        </Flex>
      </Flex>
    ),
    [style, data]
  );
};

export default PokemonGridTileInfo;
