import { useFonts } from 'expo-font';
import { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { theme } from './constants';
import { Page, StartPage } from './screens/index';
import { styles } from './styles';
export default function App() {
  const [userName, setUserName] = useState(null);
  const [loaded] = useFonts({
    'LilitaOne-Regular': require('../assets/fonts/LilitaOne-Regular.ttf'),
    'Anton-Regular': require('../assets/fonts/Anton-Regular.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator sixe="larger" color={theme.colors.secondary} />;
  }

  const onChangePage = (Name) => {
    setUserName(Name);
  };
  const onHandlerStartPage = () => {
    setUserName(null);
  };
  const Content = () => {
    if (userName) {
      return <Page name={userName} onHandlerStartPage={onHandlerStartPage} />;
    }
    return <StartPage onChangePage={onChangePage} />;
  };
  /**  userName ? (
      <Page name={userName} onHandlerStartPage={onHandlerStartPage} />
    ) : (
      <StartPage onChangePage={onChangePage} />
    );
*/
  return (
    <View style={styles.container}>
      <Content />
    </View>
  );
}
