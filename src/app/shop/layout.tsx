'use client';

import { useEffect } from 'react';

import { getCategoriesAndDocuments } from '@/utils/firebase/firebase.utils';

import { selectCategoriesMap } from '@/store/categories/category.selector';
import { setCategories } from '@/store/categories/category.slice';
import { useAppDispatch, useAppSelector } from '@/store/store';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const categoriesMap = useAppSelector(selectCategoriesMap);

  useEffect(() => {
    if (Object.keys(categoriesMap).length > 0) return;

    const fetchCategories = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    fetchCategories();
  }, [dispatch, categoriesMap]);

  return <>{children}</>;
}
