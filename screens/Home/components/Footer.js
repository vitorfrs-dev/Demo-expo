import { Box, Text } from "native-base";

import { DYNAMIC_PHRASE } from "@env";

export default function Footer() {
  return (
    <Box bg="gray.900" justifyContent="center" alignItems="center" py={6} px={4}>
      <Text color="white">Made with ❤️ by Vitor Ferreira</Text>
      <Text color="white">{DYNAMIC_PHRASE}</Text>
    </Box>
  )
}