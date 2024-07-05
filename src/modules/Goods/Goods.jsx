import styles from './Goods.module.scss';
import { Cart } from '../Cart/Cart';
import { goodsArray } from './goodsArray.js';
import { Card } from '../Card/Card.jsx';
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
