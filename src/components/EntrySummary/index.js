import React from 'react';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

import Container from '../Core/Container';

const entriesGrouped = [
  {key: '4', description: 'Alimentação:', amount: 201},
  {key: '5', description: 'Combustível:', amount: 12},
  {key: '6', description: 'Aluguel:', amount: 120},
  {key: '7', description: 'Lazer:', amount: 250},
  {key: '8', description: 'Outros:', amount: 1200},
];

const EntrySummary = ({onPressActionButton}) => {
  return (
    <Container
      title="Categorias"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton} >
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
    </Container>
  );
};

export default EntrySummary;
