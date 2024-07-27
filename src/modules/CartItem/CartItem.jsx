import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { addItemToCart } from '@store/reducers/cartSlice';
import debounce from '@utils/debounce';
import { API_URL } from '@/constants';

export const CartItem = ({ id, name, photoUrl, price, quantity }) => {
  const dispatch = useDispatch();
  const [inputQuantity, setInputQuantity] = useState(quantity);
  const [itemPrice, setItemPrice] = useState(price);

  const inputRef = useRef(null);
  const debouncedInputChange = useRef(debounce((newQuantity) => {
    dispatch(addItemToCart({ productId: id, quantity: newQuantity }));
  }, 500)).current;

  useEffect(() => {
    setItemPrice(price * quantity);
  }, [quantity, price]);

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setInputQuantity(newQuantity);
    debouncedInputChange(newQuantity);
  };

  const handleDecrement = () => {
    if (parseInt(inputRef.current.value) < 1) {
      inputRef.current.value = 0;
      setInputQuantity(0);
      debouncedInputChange(0);
      return;
    }

    const newQuantity = inputQuantity - 1;
    setInputQuantity(newQuantity);
    dispatch(addItemToCart({ productId: id, quantity: newQuantity }));
  };

  const handleIncrement = () => {
    const newQuantity = inputQuantity + 1;
    setInputQuantity(newQuantity);
    dispatch(addItemToCart({ productId: id, quantity: newQuantity }));
  };

  return (
    <li className={ styles['cart-item'] }>
      <img className={ styles.img }
           src={ `${ API_URL }${ photoUrl }` }
           alt={ name }
      />
      <h4 className={ styles.title }>{ name }</h4>
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
               value={ parseInt(inputQuantity) }
               onChange={ handleInputChange }
               ref={ inputRef }
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
