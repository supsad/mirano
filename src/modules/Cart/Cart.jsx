import styles from './Cart.module.scss';
import classNames from 'classnames';
import { CartItem } from '@modules/CartItem/CartItem.jsx';
import { goodsArray } from '@/goodsArray.js';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '@redux/cartSlice.js';
import { openOrder } from '@redux/orderSlice.js';

export const Cart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.cart.isOpen);

  const handlerCartClose = () => dispatch(toggleCart());
  const handlerOrderOpen = () => dispatch(openOrder());

  if (!isOpen) return null;

  return (
    <section className={ classNames(styles.cart, styles.cart_open) }>
      <div className={ styles.container }>
        <div className={ styles.header }>
          <h3 className={ styles.title }>Ваш заказ</h3>

          <button onClick={ handlerCartClose }>
            <svg
              width="28"
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
            goodsArray.map(item => (
              <CartItem key={ item.id } { ...item } />
            ))
          }
        </ul>

        <div className={ styles.footer }>
          <button
            className={ styles['order-btn'] }
            onClick={ handlerOrderOpen }>
            Оформить
          </button>
          <p className={ styles.price }>0&nbsp;₽</p>
        </div>
      </div>
    </section>
  )
};
