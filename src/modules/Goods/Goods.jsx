import styles from './Goods.module.scss';
import { Cart } from '@modules/Cart/Cart.jsx';
import { Card } from '@modules/Card/Card.jsx';
import { goodsArray } from '@/goodsArray.js';
import classNames from 'classnames';

export const Goods = ({ className }) => (
  <section className={ styles.goods }>
    <div className={ classNames(className, styles.container) }>
      <div className={ styles.box }>
        <h2 className={ styles.title }>Цветы</h2>

        <ul className={ styles.list }>
          {
            goodsArray.map(item => (
              <li key={ item.id }>
                <Card { ...item } />
              </li>
            ))
          }
        </ul>
      </div>

      <Cart />
    </div>
  </section>
);
