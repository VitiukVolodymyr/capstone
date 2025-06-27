'use client';

import type { FC } from 'react';

import { useRouter } from 'next/navigation';

import { selectCartItems, selectIsCartOpen } from '@/store/cart/cart.selector';
import { setIsCartOpen } from '@/store/cart/cart.slice';
import { useAppDispatch, useAppSelector } from '@/store/store';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const cartItems = useAppSelector(selectCartItems);
  const isOpen = useAppSelector(selectIsCartOpen);

  const goToCheckoutHandler = () => {
    router.push('/checkout');
    dispatch(setIsCartOpen(!isOpen));
  };

  return (
    <div className="absolute top-[90px] right-10 z-50 flex h-[340px] w-[260px] flex-col border border-black bg-white p-5">
      <div className="flex h-[240px] flex-col overflow-y-scroll">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="mx-auto my-[50px] text-[18px]">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler} className="mt-auto">
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
