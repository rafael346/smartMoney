import React from 'react';
import {View, Picker, Button} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
//Tela de Relatórios
const Report = () => {
  const currentBalance =2065.35;
  const entries=[
    {key:'1', description: 'Padaria Asa Branca: ', amount: 10},
    {key:'2', description: 'Supermercado Isadora: ', amount: 190},
    {key:'3', description: 'Posto Ipiranga: ', amount: 291},
  ];

  const entriesGrouped =[
    {key: '4', description: 'Alimentação:', amount: 201},
    {key: '5', description: 'Combustível:', amount: 12},
    {key: '6', description: 'Aluguel:', amount: 120},
    {key: '7', description: 'Lazer:', amount: 250},
    {key: '8', description: 'Outros:', amount: 1200},
  ];

  return (
    <View>
      <BalanceLabel currentBalance={currentBalance}/>
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary entriesGrouped={entriesGrouped}/>
      <EntryList entries={entries} />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

export default Report;
