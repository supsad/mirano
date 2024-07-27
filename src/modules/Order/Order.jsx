import styles from './Order.module.scss';
import { OrderForm } from '@modules/OrderForm/OrderForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { closeOrder } from '@store/reducers/orderSlice.js';
import { useCallback, useEffect } from 'react';

const Titles = {
  FORM: 'Оформить заказ',
  NOTIFICATION: 'Заказ оформлен!'
};

export const Order = () => {
  const dispatch = useDispatch();
  const { isOpen, orderId } = useSelector(state => state.order);

  const isTakeOrderSuccess = false;

  const onOrderClose = useCallback(() => {
    dispatch(closeOrder());
  }, [dispatch]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePressEsc = ({ key }) => key === 'Escape' && onOrderClose();

    document.addEventListener('keydown', handlePressEsc);

    return () => document.removeEventListener('keydown', handlePressEsc);
  }, [isOpen, onOrderClose]);

  if (!isOpen) return null;

  return (
    <div className={ styles.order }
         onClick={ onOrderClose }
    >
      <div className={ styles.wrapper }
           onClick={ e => e.stopPropagation() }
      >
        {
          isTakeOrderSuccess ? (
            <>
              <h2 className={ styles.title }>{ Titles.NOTIFICATION }</h2>
              <p>Ваш номер заказа: { orderId }</p>
            </>
          ) : (
            <>
              <h2 className={ styles.title }>{ Titles.FORM }</h2>
              <OrderForm className={ styles.form } />
            </>
          )
        }

        <button className={ styles.close } type="button">×</button>
      </div>
    </div>
  );
};
