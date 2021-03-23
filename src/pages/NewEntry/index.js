import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {saveEntry} from '../../services/Entries';

import BalanceLabel from '../../components/BalanceLabel';
// Tela  para inserção de dados
const NewEntry = ({navigation}) => {
  const currentBalance = 2065.35;
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    entryAt: new Date(),
  });

  const [amount, setAmount] = useState(`${entry.amount}`);

  const save = () => {
    const data = {
      amount: amount,
    };
    console.log('NewEntry :: save', data);
    saveEntry(data, entry);
  };

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setAmount(text)}
          value={amount}
        />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button title="Adicionar" onPress={save} />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
