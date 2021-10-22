import React, { memo } from "react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { pokemonStatName } from "utils/stat-name";

const PokemonStats = ({ name, value }) => {
  return (
    <Stat>
      <StatLabel
        fontSize={10}
        fontWeight={"bold"}
        children={pokemonStatName()[name]}
      />
      <StatNumber fontSize={12} fontWeight={"bold"} children={value} />
    </Stat>
  );
};

export default memo(PokemonStats);
