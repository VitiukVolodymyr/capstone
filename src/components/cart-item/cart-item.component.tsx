'use client';

import type { FC } from 'react';

import Image from 'next/image';

import type { CartItemInterface } from '@/store/cart/cart.slice';

interface CartItemProps {
  cartItem: CartItemInterface;
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="mb-[15px] flex h-[80px] w-full">
      <div className="relative aspect-square w-[30%]">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>
      <div className="flex w-[70%] flex-col items-start justify-center p-[10px_20px]">
        <span className="text-[16px]">{name}</span>
        <span className="text-[14px]">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
