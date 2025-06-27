'use client';

import { useEffect } from 'react';

import CategoryPreview from '@/components/category-preview/category-preview';
import { Loader } from '@/components/loader/Loader';

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '@/store/categories/category.selector';
import { useAppDispatch, useAppSelector } from '@/store/store';

import { setCategories } from '../../store/categories/category.slice';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

const Shop = () => {
  const dispatch = useAppDispatch();
  const categoriesMap = useAppSelector(selectCategoriesMap);
  const isLoading = useAppSelector(selectCategoriesIsLoading);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products} />;
        })
      )}
    </>
  );
};

export default Shop;
