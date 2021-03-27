import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import {saveEntry} from '../../services/Entries';
import {deleteEntry} from '../../services/Entries';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from './NewEntryInput';

import Colors from '../../styles/Colors';

const NewEntry = ({navigation}) => {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    entryAt: new Date(),
    category: {id: null, name: 'Selecione'},
  });

  const [amount, setAmount] = useState(entry.amount);
  const [debit, setDebit] = useState(entry.amount <= 0);
  const [category, setCategory] = useState(entry.category);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  };

  const save = () => {
    //onSave
    const data = {
      amount: parseFloat(amount),
      category: category,
    };
    console.log('NewEntry :: save', data);
    saveEntry(data, entry);
    goBack();
  };

  const remove = () => {
    //onDelete
    deleteEntry(entry);
    goBack();
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <NewEntryInput
          value={amount}
          onChangeDebit={setDebit}
          onChangeValue={setAmount}
        />
        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button
          title="Adicionar"
          onPress={() => {
            isValid() && save();
          }}
        />
        <Button title="Excluir" onPress={remove} />
        <Button title="Cancelar" onPress={goBack} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
