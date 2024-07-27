import styles from './OrderForm.module.scss';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { sendOrder, updateOrderData } from '@store/reducers/orderSlice';
import { useEffect, useState } from 'react';
import getUserLocalDate, { getValidDateStringRU } from '@utils/calculateDeliveryDate';

export const OrderForm = ({ className }) => {
  const dispatch = useDispatch();
  const orderData = useSelector(state => state.order.data);
  const itemsCart = useSelector(state => state.cart.items);

  const [totalPrice, setTotalPrice] = useState(0);
  const [date, setDate] = useState(getUserLocalDate());

  useEffect(() => {
    setDate(getUserLocalDate());
    setTotalPrice(itemsCart.reduce((total, item) => total + item.price * item.quantity, 0));
  }, [itemsCart]);

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    dispatch(updateOrderData({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendOrder());
  };

  return (
    <>
      <form className={ classNames(className, styles['order-form']) }
            id="order-form"
            onSubmit={ handleSubmit }
      >
        <fieldset className={ styles.fieldset }>
          <legend className={ styles.legend }>Данные заказчика</legend>
          <div className={ styles['input-group'] }>
            <input className={ styles.input }
                   required
                   type="text"
                   name="buyerName"
                   placeholder="Имя"
                   value={ orderData.buyerName }
                   onChange={ handleChange }
            />
            <input className={ styles.input }
                   required
                   type="text"
                   name="buyerPhone"
                   placeholder="Телефон"
                   value={ orderData.buyerPhone }
                   onChange={ handleChange }
            />
          </div>
        </fieldset>
        <fieldset className={ styles.fieldset }>
          <legend className={ styles.legend }>Данные получателя</legend>
          <div className={ styles['input-group'] }>
            <input className={ styles.input }
                   required
                   type="text"
                   name="recipientName"
                   placeholder="Имя"
                   value={ orderData.recipientName }
                   onChange={ handleChange }
            />
            <input className={ styles.input }
                   required
                   type="text"
                   name="recipientPhone"
                   placeholder="Телефон"
                   value={ orderData.recipientPhone }
                   onChange={ handleChange }
            />
          </div>
        </fieldset>
        <fieldset className={ styles.fieldset }>
          <legend className={ styles.legend }>Адрес</legend>
          <div className={ styles['input-group'] }>
            <input className={ styles.input }
                   required
                   type="text"
                   name="street"
                   placeholder="Улица"
                   value={ orderData.street }
                   onChange={ handleChange }
            />
            <input className={ classNames(styles.input, styles.input_min) }
                   required
                   type="text"
                   name="house"
                   placeholder="Дом"
                   value={ orderData.house }
                   onChange={ handleChange }
            />
            <input className={ classNames(styles.input, styles.input_min) }
                   required
                   type="text"
                   name="apartment"
                   placeholder="Квартира"
                   value={ orderData.apartment }
                   onChange={ handleChange }
            />
          </div>
        </fieldset>
        <fieldset className={ styles.fieldset }>
          <div className={ styles.payment }>
            <label className={ styles['label-radio'] }>
              <input className={ styles.radio }
                     type="radio"
                     name="paymentOnline"
                     value={ !!orderData.paymentOnline }
                     onChange={ handleChange }
                     defaultChecked
              />
              Оплата онлайн
            </label>
          </div>
          <div className={ styles.delivery }>
            <label htmlFor="delivery">
              Доставка { getValidDateStringRU(date[2], date[1]) }
            </label>
            <input type="hidden"
                   name="deliveryDate"
                   value={ orderData.deliveryDate }
                   onChange={ handleChange }
            />
            <div className={ styles['select-wrapper'] }>
              <select className={ styles.select }
                      name="deliveryTime"
                      id="delivery"
                      value={ orderData.deliveryTime }
                      onChange={ handleChange }
              >
                <option value="9-12" defaultChecked>
                  с 9:00 до 12:00
                </option>
                <option value="12-15">с 12:00 до 15:00</option>
                <option value="15-18">с 15:00 до 18:00</option>
                <option value="18-21">с 18:00 до 21:00</option>
              </select>
            </div>
          </div>
        </fieldset>
      </form>
      <div className={ styles.footer }>
        <p>{ totalPrice }&nbsp;₽</p>
        <button className={ styles.button }
                type="submit"
                form="order-form"
        >
          Заказать
        </button>
      </div>
    </>
  );
};
