import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Box, useMediaQuery } from "@chakra-ui/react";

import PokemonGridTile from "./PokemonGridTile";

export default function PokemonGrid({ list, total }) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const totalCount = total;
  const columnCount = isMobile ? 2 : 4;

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    return (
      index < totalCount && (
        <PokemonGridTile {...{ index, style, ...list[index] }} />
      )
    );
  };

  return (
    <Box h={"90vh"}>
      <AutoSizer>
        {({ height, width }) => {
          const columnWidth = width / columnCount;
          const rowCount = Math.ceil(totalCount / columnCount);
          return (
            <Grid
              {...{
                height,
                width,
                //Cantidad de elementos
                rowCount,
                columnCount,
                //Dimensiones de elemento
                columnWidth,
                rowHeight: columnWidth,
              }}
            >
              {Cell}
            </Grid>
          );
        }}
      </AutoSizer>
    </Box>
  );
}
