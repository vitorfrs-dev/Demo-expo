import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Text, View } from 'react-native';
import Home from './screens/Home/Home';

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}

