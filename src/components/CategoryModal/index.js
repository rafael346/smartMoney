import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

import {
  getDebitCategories,
  getCreditCategories,
  getAllCategories,
} from '../../services/Categories';

import Colors from '../../styles/Colors';

const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCreditCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      setDebitCategories(await getDebitCategories());
      setCreditCategories(await getCreditCategories());
      setAllCategories(await getAllCategories());
    }
    loadCategories();
    console.log('NewEntryCategoryPicker :: useEffect');
  }, []);

  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={isVisible}>
        <View style={styles.modal}>
          <FlatList
            data={
              categoryType === 'all'
                ? allCategories
                : categoryType === 'debit'
                ? debitCategories
                : creditCategories
            }
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => onConfirm(item)}>
                <Text style={[styles.modalItemText, {color: item.color}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
          <ActionFooter>
            <ActionPrimaryButton title="Fechar" onPress={onCancel} />
          </ActionFooter>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalItem: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  modalItemText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default CategoryModal;
