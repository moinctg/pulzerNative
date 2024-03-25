import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import StackNavigator from './StackNavigator';
export default function App() {

  return (

  <SafeAreaProvider>
  <StackNavigator></StackNavigator>
  </SafeAreaProvider>
  );
}

