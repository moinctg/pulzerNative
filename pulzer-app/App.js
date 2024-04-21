import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import StackNavigator from './StackNavigator';
import { AuthProvider } from './context/AuthContext';
export default function App() {

  return (
<AuthProvider>
  <SafeAreaProvider>
  <StackNavigator></StackNavigator>
  </SafeAreaProvider>
  </AuthProvider>
  );
}

