import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addItemToCart, setItemCountToCart } from '@store/reducers/cartSlice.js';

export const Card = ({ id, img, title, dateDelivery, price }) => {
  const dispatch = useDispatch();

  const handlerAddToCart = () => {
    dispatch(addItemToCart({ id, img, title, dateDelivery, price }));
    dispatch(setItemCountToCart());
  };

  return (
    <article className={ styles.card }>
      <img
        className={ styles.image }
        src={ img }
        alt={ title }
      />
      <div className={ styles.content }>
        <h3 className={ styles.title }>{ title }</h3>
        <div className={ styles.footer }>
          <p className={ styles['date-delivery'] }>{ dateDelivery }</p>
          <button className={ styles.button }
                  onClick={ handlerAddToCart }
          >
            { price }&nbsp;₽
          </button>
        </div>
      </div>
    </article>
  );
};
