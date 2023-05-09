import { Text, Avatar, VStack } from 'native-base';


const Header = () => (
  <VStack 
    alignItems="center" 
    w="100%" 
    h={300} 
    justifyContent="center" 
    borderBottomRadius={'3xl'}
  >
    <Avatar size="2xl" source={require('../../../assets/avatar.jpeg')}/>
    <Text fontWeight="semibold" fontSize="lg" mt={2}>John Doe</Text>
    <Text fontWeight="normal" fontSize="md" mt={2}>Mobile Developer | React Native</Text>
    <Text fontWeight="normal" fontSize="md" mt={2}>{process.env.API_URL}</Text>

  </VStack>
)

export default Header;