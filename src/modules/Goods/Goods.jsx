import './goods.scss';
import { Cart } from '../Cart/Cart';
import { goodsArray } from './goodsArray.js';
import { Card } from '../Card/Card.jsx';

export const Goods = () => (
  <section className="goods">
    <div className="container goods__container">
      <div className="goods__box">
        <h2 className="goods__title">Цветы</h2>

        <ul className="goods__list">
          {goodsArray.map(item => (
            <li key={item.id} className="goods__item">
              <Card className="goods__card" {...item} />
            </li>
          ))}
          <li className="goods__item">
            <article className="goods__card card">
              <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/38.jpg"
                   alt="Букет из тюльпан Dolche vita (51 шт)" />
              <div className="card__content">
                <h3 className="card__title">Букет из тюльпан Dolche vita (51 шт)</h3>
                <div className="card__footer">
                  <p className="card__date-delivery">сегодня в 14:00</p>
                  <button className="card__button">6700&nbsp;₽</button>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>

      <Cart />
    </div>
  </section>
);