import { CardItemContainer, Img, ItemDetails, Name } from './cart-item.style';

import React from 'react';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CardItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CardItemContainer>
  );
};

export default CartItem;
