'use client';

import CategoryPreview from '@/components/category-preview/category-preview';
import { Loader } from '@/components/loader/Loader';

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '@/store/categories/category.selector';
import { useAppSelector } from '@/store/store';

const Shop = () => {
  const categoriesMap = useAppSelector(selectCategoriesMap);
  const isLoading = useAppSelector(selectCategoriesIsLoading);

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
