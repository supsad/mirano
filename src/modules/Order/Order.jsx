import './order.scss';
import { OrderForm } from '../OrderForm/OrderForm.jsx';

const Titles = {
  FORM: 'Оформить заказ',
  NOTIFICATION: 'Заказ оформлен!'
};

export const Order = ({ type = '' }) => {
  if (type === undefined || type === null || type === '') {
    return;
  }

  return (
    <div className="order">
      <div className="order__wrapper">
        <h2 className="order__title">{ Titles[`${type?.toUpperCase()}`] }</h2>

        {
          type?.toUpperCase() === Object.keys(Titles)[0] ? (
            <OrderForm className="order__form" />
          ) : (
            <p className="order__id">Ваш номер заказа: 971f365a-caa1-4cdb-9446-bad2eff047e1</p>
          )
        }

        <button className="order__close" type="button">×</button>
      </div>
    </div>
  );
};
