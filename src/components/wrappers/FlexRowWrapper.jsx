import React from "react";
import { Flex } from "@chakra-ui/react";

export default function Wrapper(children) {
  return (
    <Flex
      flexDirection="row"
      p={0.5}
      justifyContent="center"
      alignContent="center"
    >
      {children}
    </Flex>
  );
}
