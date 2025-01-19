import { Box, Text } from "@chakra-ui/react";
import { Yesteryear } from "next/font/google";
const yesteryear = Yesteryear({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const TextLayout = () => {
  return (
    <Box className={yesteryear.className} fontSize="7rem" textAlign="center">
      <Text color="aliceblue"> Witamy </Text>
    </Box>
  );
};
export default TextLayout;
