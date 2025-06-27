'use client';

import ShoppingBagIcon from '@icons/shopping-bag.svg';

import { type FC } from 'react';

import { selectCartCount, selectIsCartOpen } from '@/store/cart/cart.selector';
import { setIsCartOpen } from '@/store/cart/cart.slice';
import { useAppDispatch, useAppSelector } from '@/store/store';

const CartIcon: FC = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);
  const isCartOpen = useAppSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div
      onClick={toggleIsCartOpen}
      className="relative flex h-[45px] w-[45px] cursor-pointer items-center justify-center"
    >
      <ShoppingBagIcon className="h-[24px] w-[24px]" />
      <span className="absolute bottom-[12px] text-[10px] font-bold">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
