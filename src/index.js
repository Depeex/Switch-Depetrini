import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';

import { theme } from './constants';
import AppNavigator from './navigation';
export default function App() {
  const [loaded] = useFonts({
    'LilitaOne-Regular': require('../assets/fonts/LilitaOne-Regular.ttf'),
    'Anton-Regular': require('../assets/fonts/Anton-Regular.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.secondary} />;
  }

  return <AppNavigator />;
}
