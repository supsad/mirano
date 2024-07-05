import styles from './CartItem.module.scss';

export const CartItem = ({ id }) => (
  <li className={ styles['cart-item'] } key={ id }>
    <img
      className={ styles.img }
      src="https://dull-rose-pawpaw.glitch.me/img/39.jpg"
      alt="Букет из роз Grand Avalanche (101 шт)" />
    <h4 className={ styles['item-title'] }>Букет из роз Grand Avalanche (101 шт)</h4>
    <div className={ styles.counter }>
      <button className={ styles['counter-btn'] }>-</button>
      <input
        className={ styles['counter-input'] }
        type="number"
        max="99"
        min="0"
        value="1" />
      <button className={ styles['counter-btn'] }>+</button>
    </div>
    <p className={ styles.price }>14800&nbsp;₽</p>
  </li>
);
