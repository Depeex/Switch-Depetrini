import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { Card } from '../../components/index';
import { theme } from '../../constants';
import { setInput } from '../../store/actions';
const User = ({ navigation }) => {
  const input = useSelector((state) => state.input.inputValue);
  const dispatch = useDispatch();
  const onHandlerReset = () => {
    dispatch(setInput(''));
    navigation.reset({
      index: 0,
      routes: [{ name: 'ShopTab' }],
    });
  };
  return (
    <View style={styles.container}>
      <Card style={styles.cardIdentification}>
        <Text style={styles.userName}>
          {input ? `Nombre: ${input}` : 'Nombre: Campo Incompleto'}
        </Text>
        <Text style={styles.userAge}>Edad: Campo Incompleto</Text>
        <Text style={styles.userBiography}>Biografia: Campo Incompleto</Text>
      </Card>
      <View style={styles.buttonContainer}>
        <Button
          title="Reset information"
          color={theme.colors.brown}
          onPress={onHandlerReset}
          disabled={!input}
        />
      </View>
    </View>
  );
};

export default User;
