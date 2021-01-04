import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Box, useBreakpointValue } from "@chakra-ui/react";

import PokemonGridTile from "./PokemonGridTile";

export default function PokemonGrid({ list, total }) {
  const getColumnWidth = (width) => width / columnCount;
  const getRowCount = () => total / columnCount;
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

  const Cell = ({ columnIndex, rowIndex, style }) => {
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
  };

  return (
    <Box h={"90vh"}>
      <AutoSizer>
        {({ height, width }) => {
          return (
            <Grid
              {...{
                useIsScrolling: true,
                height,
                width,
                columnCount,
                rowCount: getRowCount(),
                columnWidth: getColumnWidth(width),
                rowHeight: getColumnWidth(width),
                children: (props) => Cell(props),
              }}
            />
          );
        }}
      </AutoSizer>
    </Box>
  );
}
