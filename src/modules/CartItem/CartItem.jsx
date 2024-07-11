import styles from './CartItem.module.scss';

export const CartItem = ({ img, title, price }) => (
  <li className={ styles['cart-item'] }>
    <img className={ styles.img }
         src={ img }
         alt={ title }
    />
    <h4 className={ styles.title }>{ title }</h4>
    <div className={ styles.counter }>
      <button className={ styles.button }>-</button>
      <input className={ styles.input }
             type="number"
             max="99"
             min="0"
             value="1"
      />
      <button className={ styles.button }>+</button>
    </div>
    <p className={ styles.price }>{ price }&nbsp;₽</p>
  </li>
);
