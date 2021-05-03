import {Alert} from 'react-native';

import {getRealm} from './Realm';
import {getUUID} from '../services/UUID';
import moment from '../vendors/moment';

export const getEntries = async (days, category) => {
  let realm = await getRealm();

  realm = realm.objects('Entry');

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();
    console.log('getEntries:: days', days);

    realm = realm.filtered('entryAt >= $0', date);
  }

  if (category && category.id) {
    console.log('getEntries:: category', JSON.stringify(category));
    realm = realm.filtered('category == $0', category);
  }

  const entries = realm.sorted('entryAt', true);
  return entries;
};

export const deleteEntry = async entry => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.delete(entry);
    });
  } catch (error) {
    console.error(
      'saveEntry :: error on delete object:',
      JSON.stringify(entry),
    );
    Alert.alert(
      'Erro ao deletar os dados de lançamento',
      JSON.stringify(entry),
    );
  }
};

export const saveEntry = async (value, entry = {}) => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        amount: value.amount || entry.amount,
        entryAt: value.entryAt || entry.entryAt,
        description: value.category.name,
        photo: value.photo,
        address: value.address || entry.address,
        latitude: value.latitude || entry.latitude,
        longitude: value.longitude || entry.longitude,
        isInit: false,
        category: value.category || entry.category,
      };
      realm.create('Entry', data, true);
    });

    console.log('saveEntry :: data', JSON.stringify(data));
  } catch (error) {
    console.error('saveEntry :: error on save object:', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento', JSON.stringify(data));
  }

  return data;
};
