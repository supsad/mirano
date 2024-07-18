import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { addItemToCart } from '@store/reducers/cartSlice';
import debounce from '@utils/debounce';

export const CartItem = ({ id, img, title, price, count }) => {
  const dispatch = useDispatch();
  const [inputQuantity, setInputQuantity] = useState(count);
  const [itemPrice, setItemPrice] = useState(price);

  const debouncedInputChange = useRef(debounce((newQuantity) => {
    dispatch(addItemToCart({ productId: id, quantity: newQuantity }));
  }, 500)).current;

  useEffect(() => {
    setItemPrice(price * count);
  }, [count, price]);

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setInputQuantity(newQuantity);
    debouncedInputChange(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = inputQuantity - 1;
    setInputQuantity(newQuantity);
    debouncedInputChange(newQuantity);
  };

  const handleIncrement = () => {
    const newQuantity = inputQuantity + 1;
    setInputQuantity(newQuantity);
    debouncedInputChange(newQuantity);
  };

  return (
    <li className={ styles['cart-item'] }>
      <img className={ styles.img }
           src={ img }
           alt={ title }
      />
      <h4 className={ styles.title }>{ title }</h4>
      <div className={ styles.counter }>
        <button className={ styles.button }
                onClick={ handleDecrement }
        >
          -
        </button>
        <input className={ styles.input }
               type="number"
               max="99"
               min="0"
               value={ inputQuantity }
               onChange={ handleInputChange }
        />
        <button className={ styles.button }
                onClick={ handleIncrement }
        >
          +
        </button>
      </div>
      <p className={ styles.price }>{ itemPrice }&nbsp;₽</p>
    </li>
  );
}
