import styles from './OrderForm.module.scss';
import classNames from 'classnames';

export const OrderForm = ({ className }) => (
  <>
    <form className={ classNames(className, styles['order-form']) } id="order-form">
      <fieldset className={ styles.fieldset }>
        <legend className={ styles.legend }>Данные заказчика</legend>
        <div className={ styles['input-group'] }>
          <input
            className={ styles.input }
            type="text"
            name="name-buyer"
            placeholder="Имя" />
          <input
            className={ styles.input }
            type="text"
            name="phone-buyer"
            placeholder="Телефон" />
        </div>
      </fieldset>
      <fieldset className={ styles.fieldset }>
        <legend className={ styles.legend }>Данные получателя</legend>
        <div className={ styles['input-group'] }>
          <input
            className={ styles.input }
            type="text"
            name="name-recipient"
            placeholder="Имя" />
          <input
            className={ styles.input }
            type="text"
            name="phone-recipient"
            placeholder="Телефон" />
        </div>
      </fieldset>
      <fieldset className={ styles.fieldset }>
        <legend className={ styles.legend }>Адрес</legend>
        <div className={ styles['input-group'] }>
          <input
            className={ styles.input }
            type="text"
            name="street"
            placeholder="Улица" />
          <input
            className={ classNames(styles.input, styles.input_min) }
            type="text"
            name="house"
            placeholder="Дом" />
          <input
            className={ classNames(styles.input, styles.input_min) }
            type="text"
            name="apartment"
            placeholder="Квартира" />
        </div>
      </fieldset>
      <fieldset className={ styles.fieldset }>
        <div className={ styles.payment }>
          <label className={ styles['label-radio'] }>
            <input
              className={ styles.radio }
              type="radio"
              name="payment-online"
              value="true"
              defaultChecked />Оплата онлайн
          </label>
        </div>
        <div className={ styles.delivery }>
          <label htmlFor="delivery">Доставка 01.07</label>
          <input
            type="hidden"
            name="delivery-date"
            value="01.07" />
          <div className={ styles['select-wrapper'] }>
            <select
              className={ styles.select }
              name="delivery-time"
              id="delivery">
              <option value="9-12">с 9:00 до 12:00</option>
              <option value="12-15">с 12:00 до 15:00</option>
              <option value="15-18">с 15:00 до 18:00</option>
              <option value="18-21">с 18:00 до 21:00</option>
            </select>
          </div>
        </div>
      </fieldset>
    </form>
    <div className={ styles.footer }>
      <p>92100&nbsp;₽</p>
      <button
        className={ styles.button }
        type="submit"
        form="order-form">
        Заказать
      </button>
    </div>
  </>
);
