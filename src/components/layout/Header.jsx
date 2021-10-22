import React , { memo } from 'react';
import { Heading, Flex } from "@chakra-ui/react";



export default memo(function Header() {

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="red.400"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" >
          Pokémon List
        </Heading>
      </Flex>
    </Flex>
  );
})
