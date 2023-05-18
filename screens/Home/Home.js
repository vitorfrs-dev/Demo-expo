import { Box, HStack, ScrollView, Text, VStack } from "native-base";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = () => (
  <Box flex={1} safeArea>
    <Box flex={1}>
      <ScrollView>
        <Header />
        <Box p={4}>
          <HStack rounded="2xl" p={4} h={40} bg="gray.700">
            <VStack>

            <Text color="white" fontWeight="semibold" fontSize="lg">React Native</Text>
            <Text color="white">React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. </Text>
            </VStack>
          </HStack>
          <HStack rounded="2xl" p={4} minH={32} bg="blue.900" mt={2}>
            <VStack>

            <Text color="white" fontWeight="semibold" fontSize="lg">React Query</Text>
            <Text color="white">Toss out that granular state management, manual refetching and endless bowls of async-spaghetti code. TanStack Query gives you declarative, always-up-to-date auto-managed queries and mutations that directly improve both your developer and user experiences.</Text>
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
    <Footer />
  </Box>
)

export default Home;