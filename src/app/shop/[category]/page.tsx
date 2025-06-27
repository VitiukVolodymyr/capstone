'use client';

import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import { Loader } from '@/components/loader/Loader';
import ProductCard from '@/components/product-card/product-card.component';

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '@/store/categories/category.selector';
import { useAppSelector } from '@/store/store';

const Category = () => {
  const params = useParams<{ category: string }>();
  const category = params?.category;
  const categoriesMap = useAppSelector(selectCategoriesMap);
  const isLoading = useAppSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="mb-[25px] text-center text-[38px]">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-4 gap-x-[20px] gap-y-[50px]">
          {products && products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </>
  );
};

export default Category;
