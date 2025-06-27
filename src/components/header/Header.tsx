'use client';

import CrwnLogo from '@icons/crown.svg';

import Link from 'next/link';

import { selectIsCartOpen } from '@/store/cart/cart.selector';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { selectCurrentUser } from '@/store/user/user.selector';
import { signOut } from '@/store/user/user.slice';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const isCartOpen = useAppSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOut());

  return (
    <>
      <nav className="mb-6 flex h-[70px] w-full justify-between">
        <Link href="/" className="block h-full w-[70px] p-6">
          <CrwnLogo />
        </Link>
        <div className="flex h-full w-1/2 items-center justify-end space-x-4">
          <Link href="/shop" className="cursor-pointer px-4 py-2 hover:underline">
            SHOP
          </Link>
          {currentUser ? (
            <button
              onClick={signOutUser}
              className="cursor-pointer border-none bg-transparent px-4 py-2 hover:underline"
              type="button"
            >
              SIGN OUT
            </button>
          ) : (
            <Link href="/auth" className="cursor-pointer px-4 py-2 hover:underline">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
      </nav>
      {isCartOpen && <CartDropdown />}
    </>
  );
};

export default Header;
