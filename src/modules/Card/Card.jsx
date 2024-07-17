import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@store/reducers/cartSlice.js';
import useHover from '@hooks/useHover.js';

export const Card = ({ id, img, title, dateDelivery, price }) => {
  const dispatch = useDispatch();
  const [
    isButtonHovered,
    hoverButtonProps
  ] = useHover();

  const handlerAddToCart = () => {
    dispatch(addItemToCart({ productId: id, quantity: 1 }));
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
                  { ...hoverButtonProps }
          >
            { isButtonHovered ? 'В корзину' : `${price}\u00A0₽` }
          </button>
        </div>
      </div>
    </article>
  );
};
