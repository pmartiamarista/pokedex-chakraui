import { useRef, useMemo } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Box, useBreakpointValue } from "@chakra-ui/react";

import PokemonGridTile from "./PokemonGridTile";

export default function PokemonGrid({ list, total }) {
  const columnCount = useBreakpointValue({
    base: 1,
    xs: 2,
    sm: 3,
    md: 4,
    lg: 6,
    xl: 8,
    "2xl": 10,
    "3xl": 12,
    "4xl": 14,
    "5xl": 16,
    "6xl": 18,
  });
  const getColumnWidth = (width) => Math.ceil(width / columnCount);
  const getRowCount = () => Math.ceil(total / columnCount);
  const gridRef = useRef();

  const GridCell = ({ columnIndex, rowIndex, style }) =>
    useMemo(() => {
      const index = rowIndex * columnCount + columnIndex;
      return (
        index < total && (
          <Box {...{ style }}>
            <PokemonGridTile
              {...{
                key: index,
                style: {
                  height: style.height / 1.001,
                  width: style.width / 1.001,
                },
                ...list[index],
              }}
            />
          </Box>
        )
      );
    }, [columnIndex, rowIndex, style]);

  console.log(gridRef);

  return (
    <Box h={"90vh"}>
      <AutoSizer>
        {({ height, width }) => {
          return (
            <Grid
              {...{
                ref: gridRef,
                useIsScrolling: true,
                height,
                width,
                columnCount,
                rowCount: getRowCount(),
                columnWidth: getColumnWidth(width),
                rowHeight: getColumnWidth(width),
                children: GridCell,
              }}
            />
          );
        }}
      </AutoSizer>
    </Box>
  );
}
