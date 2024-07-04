import './order-form.scss';
import classNames from 'classnames';

export const OrderForm = ({ className }) => (
  <>
    <form className={ classNames(className, 'order-form') } id="order-form">
      <fieldset className="order-form__fieldset">
        <legend className="order-form__legend">Данные заказчика</legend>
        <div className="order-form__input-group">
          <input className="order-form__input" type="text" name="name-buyer" placeholder="Имя" />
          <input className="order-form__input" type="text" name="phone-buyer" placeholder="Телефон" />
        </div>
      </fieldset>
      <fieldset className="order-form__fieldset">
        <legend className="order-form__legend">Данные получателя</legend>
        <div className="order-form__input-group">
          <input className="order-form__input" type="text" name="name-recipient" placeholder="Имя" />
          <input className="order-form__input" type="text" name="phone-recipient" placeholder="Телефон" />
        </div>
      </fieldset>
      <fieldset className="order-form__fieldset">
        <legend className="order-form__legend">Адрес</legend>
        <div className="order-form__input-group">
          <input className="order-form__input" type="text" name="street" placeholder="Улица" />
          <input className="order-form__input order-form__input_min" type="text" name="house" placeholder="Дом" />
          <input className="order-form__input order-form__input_min" type="text" name="apartment"
                 placeholder="Квартира" />
        </div>
      </fieldset>
      <fieldset className="order-form__fieldset">
        <div className="order-form__payment">
          <label className="order-form__label-radio">
            <input className="order-form__radio" type="radio" name="payment-online"
                   value="true" defaultChecked />Оплата онлайн
          </label>
        </div>
        <div className="order-form__delivery">
          <label htmlFor="delivery">Доставка 01.07</label>
          <input type="hidden" name="delivery-date" value="01.07" />
          <div className="order-form__select-wrapper">
            <select className="order-form__select" name="delivery-time" id="delivery">
              <option value="9-12">с 9:00 до 12:00</option>
              <option value="12-15">с 12:00 до 15:00</option>
              <option value="15-18">с 15:00 до 18:00</option>
              <option value="18-21">с 18:00 до 21:00</option>
            </select>
          </div>
        </div>
      </fieldset>
    </form>
    <div className="order-form__footer">
      <p className="order-form__total">92100&nbsp;₽</p>
      <button className="order-form__button" type="submit" form="order-form">Заказать</button>
    </div>
  </>
);
