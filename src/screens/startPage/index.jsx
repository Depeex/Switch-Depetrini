import React, { useState } from 'react';
import { Text, TextInput, Button, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from './styles';
import { Card } from '../../components/index';
import { theme } from '../../constants';

const StartPage = ({ onChangePage, navigation }) => {
  const [onInputEditable, setOnInputEditable] = useState(true);
  const [userName, setUserName] = useState('');
  const [selectedName, setSelectedName] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const onHandlerChangeText = (text) => {
    setUserName(text);
  };
  const onHandlerConfirm = () => {
    setConfirmed(true);
    setSelectedName(userName);
    setUserName('');
    setOnInputEditable(false);
  };
  const onHandlerNextPage = () => {
    setConfirmed(false);
    setOnInputEditable(true);
    navigation.navigate('Page', { datos: selectedName });
  };

  const onHandlerReset = () => {
    setConfirmed(false);
    setSelectedName(null);
    setUserName('');
    setOnInputEditable(true);
  };

  const Confirmed = () =>
    confirmed ? (
      <Card style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Hola {selectedName}</Text>
        <Text style={styles.nextTitle}>Te invitamos a que presiones el siguiente boton</Text>
        <Button title="Continuar" color={theme.colors.greenSoft} onPress={onHandlerNextPage} />
        <Button title="Reset" color={theme.colors.orange} onPress={onHandlerReset} />
      </Card>
    ) : null;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Card style={styles.titleContainer}>
          <Text style={styles.title}>Bienvenido</Text>
        </Card>
        <Card style={styles.inputContainer}>
          <TextInput
            placeholder="Introduzca su nombre"
            style={styles.input}
            blurOnSubmit
            value={userName}
            maxLength={15}
            onChangeText={onHandlerChangeText}
            keyboardType="default"
            autoCapitalize="characters"
            editable={onInputEditable}
          />
          <Button
            title="Confirm"
            color="#4C4B3B"
            disabled={userName === ''}
            onPress={onHandlerConfirm}
          />
        </Card>
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartPage;
