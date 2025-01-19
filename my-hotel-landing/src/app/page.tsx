import { Box, Flex, Text } from "@chakra-ui/react";
import Header from "./components/header";
import Image from "next/image";
import TextLayout from "./components/text";

export default function Home() {
  return (
    <Flex direction="column" align="center" minH="100vh">
      <Box width="100%" position="relative" height="600px">
        <Box position="absolute" top="0" left="0" width="100%" zIndex="1">
          <Header></Header>
        </Box>
        <Box width="100%" position="relative" height="600px">
          <Box position="absolute" top="11rem" left="0" width="100%" zIndex="1">
            <TextLayout />
          </Box>

          <Image
            src="/img/IMG_0068 (1).jpg"
            alt="land"
            layout="fill"
            objectFit="cover"
          ></Image>
        </Box>
      </Box>
      <Text fontSize="2xl" color="teal.500">
        Hello, welcome to My Hotel Landing!
      </Text>
      <Text fontSize="lg" mt={4}>
        This is a simple Chakra UI example.
      </Text>
    </Flex>
  );
}
