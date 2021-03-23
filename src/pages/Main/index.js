import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

//Tela Inicial
const Main = ({navigation}) => {
  const currentBalance = 2064.35;

  const entriesGrouped = [
    {key: '4', description: 'Alimentação:', amount: 201},
    {key: '5', description: 'Combustível:', amount: 12},
    {key: '6', description: 'Aluguel:', amount: 120},
    {key: '7', description: 'Lazer:', amount: 250},
    {key: '8', description: 'Outros:', amount: 1200},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Main;
