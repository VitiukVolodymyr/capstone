'use client';

import Image from 'next/image';

import { addItemToCart } from '@/store/cart/cart.slice';
import type { CategoryItem } from '@/store/categories/category.slice';
import { useAppDispatch } from '@/store/store';

import Button from '../button/button.component';

interface ProductCardProps {
  product: CategoryItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="group relative flex h-[350px] w-full max-w-[300px] flex-col items-center">
      <div className="relative mb-3 h-[95%] w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-80"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div className="flex w-full justify-between px-1 text-lg">
        <span className="w-[80%] truncate">{name}</span>
        <span className="w-[20%] text-right">${price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={addProductToCart}
        className="absolute top-[240px] bottom-4 w-[70%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
