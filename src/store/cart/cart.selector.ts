import { createSelector } from 'reselect';

import type { RootState } from '../store';
import type { CartState } from './cart.slice';

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectIsCartOpen = createSelector([selectCartReducer], cart => cart.isCartOpen);

export const selectCartItems = createSelector([selectCartReducer], cart => cart.cartItems);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0),
);

export const selectCartCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0),
);
