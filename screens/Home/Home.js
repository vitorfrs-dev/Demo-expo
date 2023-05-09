import { Box, HStack, ScrollView, Text, VStack } from "native-base";
import Header from "./components/Header";

const Home = () => (
  <Box flex={1} safeArea>
    <ScrollView>
      <Header />
      <Box p={4}>
        <HStack rounded="2xl" p={4} h={40} bg="gray.700">
          <VStack>

          <Text color="white" fontWeight="semibold" fontSize="lg">React Native</Text>
          <Text color="white">nananana na ananana na na na na na  ana n anan an na nananannanana an na nan a</Text>
          </VStack>
        </HStack>
        <HStack rounded="2xl" p={4} h={32} bg="blue.900" mt={2}>
          <VStack>

          <Text color="white" fontWeight="semibold" fontSize="lg">React Query</Text>
          <Text color="white">nananana na ananana na na na na na  ana n anan an na nananannanana an na nan a</Text>
          </VStack>
        </HStack>
        <HStack rounded="2xl" p={4} h={40} bg="gray.700" mt={2}>
          <VStack>

          <Text color="white" fontWeight="semibold" fontSize="lg">React Navigation</Text>
          <Text color="white">Routing and navigation for Expo and React Native apps.</Text>
          </VStack>
        </HStack>
      </Box>
    </ScrollView>
  </Box>
)

export default Home;