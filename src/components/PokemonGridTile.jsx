import React from "react";
import { Box, Skeleton } from "@chakra-ui/react";

import PokemonGridTileInfo from "./PokemonGridTileInfo";
import { useFetchPokemon } from "hooks/useFetchPokemon";

export default function PokemonGridTile({ style, url, name }) {
  const { status, data } = useFetchPokemon({url, name});

  return (
    <Box
      style={{
        ...style,
        textAlign: "center",
        borderColor: "#000",
        borderWidth: 1.5,
        borderRadius: 8,
      }}
    >
      <Skeleton
        {...{
          isLoaded: status === "success",
          height: style.height,
          width: style.width,
        }}
      >
        {status === "success" && <PokemonGridTileInfo {...{ style, data }} />}
      </Skeleton>
    </Box>
  );
}
