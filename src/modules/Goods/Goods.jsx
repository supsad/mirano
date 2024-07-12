import styles from './Goods.module.scss';
import { Cart } from '@modules/Cart/Cart.jsx';
import { Card } from '@modules/Card/Card.jsx';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGoods } from '@store/reducers/goodsSlice.js';
import { APU_URL } from '@/constants.js';
import { Loader } from '@modules/Loader/Loader.jsx';

export const Goods = ({ containerClass, titleClass }) => {
  const dispatch = useDispatch();
  const {
    items: goods,
    status: goodsStatus,
    error
  } = useSelector(state => state.goods);

  useEffect(() => {
    if (goodsStatus !== 'idle') return;
    dispatch(fetchGoods());
  }, [dispatch, goodsStatus]);

  let content = null;

  if (goodsStatus === 'loading') {
    content = <Loader />
  } else if (goodsStatus === 'succeeded') {
    content = <ul className={ styles.list }>
      {
        goods.map(item => (
          <li key={ item.id }>
            <Card id={ item.id }
                  img={ `${ APU_URL }${ item.photoUrl }` }
                  title={ item.name }
                  dateDelivery={ 'сегодня в 14:00' }
                  price={ item.price }
            />
          </li>
        ))
      }
    </ul>
  } else if (error) {
    content = <p>{ error }</p>
  }

  return (
    <section className={ styles.goods }>
      <div className={ classNames(containerClass, styles.container) }>
        <div className={ styles.box } style={{ position: 'relative' }}>
          <h2 className={ titleClass }>Цветы</h2>

          { content }
        </div>

        <Cart />
      </div>
    </section>
  );
};
