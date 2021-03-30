import {useEffect, useState} from 'react';

import {
  getDebitCategories,
  getCreditCategories,
  getAllCategories,
  getInitCategory,
} from '../services/Categories';

const useCategories = () => {
  const [debitCategories, setDebitCategories] = useState();
  const [creditCategories, setCreditCategories] = useState();
  const [allCategories, setAllCategories] = useState();
  const [initCategory, setInitCategory] = useState();

  useEffect(() => {
    const loadDebitCategories = async () => {
      const data = await getDebitCategories();
      setDebitCategories(data);
    };
    const loadCreditCategories = async () => {
      const data = await getCreditCategories();
      setCreditCategories(data);
    };
    const loadAllCategories = async () => {
      const data = await getAllCategories();
      setAllCategories(data);
    };
    const loadInitCategory = async () => {
      const data = await getInitCategory();
      setInitCategory(data);
    };

    loadDebitCategories();
    loadCreditCategories();
    loadAllCategories();
    loadInitCategory();
  }, []);
  return [debitCategories, creditCategories, allCategories, initCategory];
};

export default useCategories;

