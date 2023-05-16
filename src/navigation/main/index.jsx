import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Page, StartPage } from '../../screens/index';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="StartPage">
      <Stack.Screen name="StartPage" component={StartPage} options={{ headerShown: false }} />
      <Stack.Screen name="Page" component={Page} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
