import { Box, Skeleton } from "@chakra-ui/react";
import { useFetch } from "hooks/useFetch";

import PokemonGridTileInfo from "./PokemonGridTileInfo";
import { pokemonTypeColor } from "utils/type-color";

export default function PokemonGridTile({ style, url }) {
  const { status, data } = useFetch(url);

  return (
    <Box
      style={{
        ...style,
        textAlign: "center",
        borderColor: data.types ? pokemonTypeColor()[data.types[0].type.name].border : '#fcfcfc',
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
        {status === "success" && (
          <PokemonGridTileInfo {...{ style, data }} />
        )}
      </Skeleton>
    </Box>
  );
}
