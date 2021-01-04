import { Heading, Flex, Box, IconButton } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

export default function Header({ onOpen }) {

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
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Pokémon
        </Heading>
      </Flex>
      <Box
        onClick={onOpen}
        display={{
          base: "block",
          // md: "none"
        }}
      >
        <IconButton
          variant="outline"
          colorScheme="red.500"
          fontSize="20px"
          icon={<MdMenu />}
        />
      </Box>
    </Flex>
  );
}
