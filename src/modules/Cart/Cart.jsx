import styles from './Cart.module.scss';
import { CartItem } from '@modules/CartItem/CartItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '@store/reducers/cartSlice.js';
import { openOrder } from '@store/reducers/orderSlice.js';
import { useEffect, useRef } from 'react';

export const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector(state => state.cart);

  const cartRef = useRef(null);

  const handlerCartClose = () => dispatch(toggleCart());
  const handlerOrderOpen = () => dispatch(openOrder());

  useEffect(() => {
    if (!isOpen) return;
    cartRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <section className={ styles.cart } ref={ cartRef }>
      <div className={ styles.container }>
        <div className={ styles.header }>
          <h3 className={ styles.title }>Ваш заказ</h3>

          <button onClick={ handlerCartClose }>
            <svg width="28"
                 height="28"
                 viewBox="0 0 28 28"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5.70715" width="1" height="25" transform="rotate(-45 5 5.70715)" fill="#D17D2F" />
              <rect x="22.6777" y="5" width="1" height="25" transform="rotate(45 22.6777 5)" fill="#D17D2F" />
            </svg>
          </button>
        </div>

        <p className={ styles['date-delivery'] }>сегодня в 14:00</p>

        <ul className={ styles.list }>
          {
            items.map(item => (
              <CartItem key={ item.id } { ...item } />
            ))
          }
        </ul>

        <div className={ styles.footer }>
          <button className={ styles['order-btn'] }
                  onClick={ handlerOrderOpen }>
            Оформить
          </button>
          <p className={ styles.price }>0&nbsp;₽</p>
        </div>
      </div>
    </section>
  )
};
