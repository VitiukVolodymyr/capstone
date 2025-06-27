import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartItemInterface {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export interface CartState {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItemInterface[];
}

const addCartItem = (
  cartItems: CartItemInterface[],
  productToAdd: CartItemInterface,
): CartItemInterface[] => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItemInterface[],
  cartItemToRemove: CartItemInterface,
): CartItemInterface[] => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};

const clearCartItem = (
  cartItems: CartItemInterface[],
  cartItemToClear: CartItemInterface,
): CartItemInterface[] => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action: PayloadAction<CartItemInterface>) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action: PayloadAction<CartItemInterface>) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action: PayloadAction<CartItemInterface>) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
  },
});

export const { setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
