import { Box, Skeleton } from "@chakra-ui/react";
import { useFetch } from "hooks/useFetch";

import PokemonGridTileInfo from "./PokemonGridTileInfo";

export default function PokemonGridTile({ style, url }) {
  const { status, data } = useFetch(url);

  return (
    <Box
      style={{
        ...style,
        textAlign: "center",
        borderColor: "black",
        borderWidth: 1,
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
