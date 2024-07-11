import styles from './Header.module.scss';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { toggleCart } from '@store/reducers/cartSlice.js';

export const Header = ({ containerClass, buttonClass }) => {
  const dispatch = useDispatch();

  const handlerCartToggle = () => dispatch(toggleCart());

  return (
    <header className={ styles.header }>
      <div className={ classNames(containerClass, styles.container) }>
        <form className={ styles.form } action="#">
          <input className={ styles.input }
                 type="search"
                 name="search"
                 placeholder="Букет из роз"
          />

          <button className={ buttonClass } aria-label="начать поиск">
            <svg width="20"
                 height="20"
                 viewBox="0 0 20 20"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.3333 4.16663C13.3333 4.78496 13.9442 5.70829 14.5625 6.48329C15.3575 7.48329 16.3075 8.35579 17.3967 9.02163C18.2133 9.52079 19.2033 9.99996 20 9.99996M20 9.99996C19.2033 9.99996 18.2125 10.4791 17.3967 10.9783C16.3075 11.645 15.3575 12.5175 14.5625 13.5158C13.9442 14.2916 13.3333 15.2166 13.3333 15.8333M20 9.99996H4.76837e-07"
                stroke="white"
              />
            </svg>
          </button>
        </form>

        <img className={ styles.logo } src="/img/logo.svg" alt="Логотип Mirano Flower Boutique" />

        <button className={ styles['cart-button'] } onClick={ handlerCartToggle }>0</button>
      </div>
    </header>
  )
};
