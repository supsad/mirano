import styles from './Order.module.scss';
import { OrderForm } from '../OrderForm/OrderForm.jsx';

const Titles = {
  FORM: 'Оформить заказ',
  NOTIFICATION: 'Заказ оформлен!'
};

export const Order = ({ type = '' }) => {
  if (type === undefined || type === null || type === '') return null;

  return (
    <div className={ styles.order }>
      <div className={ styles.wrapper }>
        <h2 className={ styles.title }>{ Titles[`${type?.toUpperCase()}`] }</h2>

        {
          type?.toUpperCase() === Object.keys(Titles)[0] ? (
            <OrderForm className={ styles.form } />
          ) : (
            <p>Ваш номер заказа: 971f365a-caa1-4cdb-9446-bad2eff047e1</p>
          )
        }

        <button className={ styles.close } type="button">×</button>
      </div>
    </div>
  );
};
