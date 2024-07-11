import styles from './Order.module.scss';
import { OrderForm } from '@modules/OrderForm/OrderForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { closeOrder } from '@store/reducers/orderSlice.js';

const Titles = {
  FORM: 'Оформить заказ',
  NOTIFICATION: 'Заказ оформлен!'
};

export const Order = () => {
  const isOpen = useSelector(state => state.order.isOpen);
  const isOrder = false;
  const dispatch = useDispatch();

  const onOrderClose = ({ target, currentTarget }) => {
    if (target === currentTarget || target.matches(`.${ styles.close }`)) {
      dispatch(closeOrder());
    }
  }

  if (!isOpen) return null;

  return (
    <div className={ styles.order } onClick={ onOrderClose }>
      <div className={ styles.wrapper }>
        {
          isOrder ? (
            <>
              <h2 className={ styles.title }>{ Titles.NOTIFICATION }</h2>
              <p>Ваш номер заказа: 971f365a-caa1-4cdb-9446-bad2eff047e1</p>
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
