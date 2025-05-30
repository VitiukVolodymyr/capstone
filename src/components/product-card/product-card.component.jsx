import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.reducer';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-card-container">
      <img alt={`${name}`} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
