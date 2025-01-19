import { Box, Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      direction="row"
      width="100%"
      height="4rem"
      justify="space-between"
      mt="2rem"
      py="1rem"
      px="4rem"
      bg="rgba(44, 79, 150, 0.91)"
      fontSize="1.25rem"
      fontWeight="500"
      color="white"
    >
      <Box width="60%">
        <Text>Gniewoszow 11</Text>
      </Box>
      <Box>
        <Text>Lokacija</Text>
      </Box>
      <Box>
        <Text>Kontakt</Text>
      </Box>
    </Flex>
  );
};

export default Header;
