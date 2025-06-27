import React from 'react';

import Image from 'next/image';

import { addItemToCart, clearItemFromCart, removeItemFromCart } from '@/store/cart/cart.slice';
import { useAppDispatch } from '@/store/store';

type CartItem = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const dispatch = useAppDispatch();

  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

  return (
    <div className="flex min-h-[100px] w-full items-center border-b border-gray-400 py-4 text-lg">
      <div className="w-[23%] pr-4">
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>
      <span className="w-[23%]">{name}</span>
      <span className="flex w-[23%] items-center">
        <div className="cursor-pointer select-none" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="mx-2">{quantity}</span>
        <div className="cursor-pointer select-none" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="w-[23%]">{price}</span>
      <div className="cursor-pointer pl-3 select-none" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
