import styles from './Goods.module.scss';
import { Cart } from '@modules/Cart/Cart.jsx';
import { Card } from '@modules/Card/Card.jsx';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '@/constants.js';
import { Loader } from '@modules/Loader/Loader.jsx';
import { useEffect, useRef } from 'react';
import { setGoodsTitleCoords } from '@store/reducers/goodsSlice';

export const Goods = ({ containerClass, titleClass }) => {
  const dispatch = useDispatch();
  const {
    items: goods,
    status: goodsStatus,
    error,
    title: goodsTitle
  } = useSelector(state => state.goods);

  const goodsTitleRef = useRef(null);

  useEffect(() => {
    const titleCoords = goodsTitleRef.current.getBoundingClientRect();
    dispatch(setGoodsTitleCoords(titleCoords.top));
  }, [dispatch])

  let titleValue = null;
  let content = null;

  if (goodsStatus === 'loading') {
    titleValue = 'Загрузка...';
    content = <Loader />;
  } else if (goodsStatus === 'succeeded') {
    if (goods === undefined || goods.length === 0) {
      titleValue = 'Товары не найдены!';
      content = <p className={ styles['no-product'] } style={ { lineHeight: '1.6em' } }>
        По вашему запросу ничего не найдено!<br />
        Попробуйте ввести другой!
      </p>;
    } else {
      titleValue = goodsTitle.value;
      content = <ul className={ styles.list }>
        {
          goods.map(item => (
            <li key={ item.id }>
              <Card id={ item.id }
                    img={ `${ API_URL }${ item.photoUrl }` }
                    title={ item.name }
                    dateDelivery={ 'сегодня в 14:00' }
                    price={ item.price }
              />
            </li>
          ))
        }
      </ul>;
    }
  }

  if (error) {
    content = <p>{ error }</p>
  }

  return (
    <section className={ styles.goods }>
      <div className={ classNames(containerClass, styles.container) }>
        <div className={ styles.box } style={ { position: 'relative' } }>
          <h2 className={ titleClass } ref={ goodsTitleRef }>{ titleValue }</h2>

          { content }
        </div>

        <Cart />
      </div>
    </section>
  );
};
