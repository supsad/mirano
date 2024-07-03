import { Header } from './modules/Header/Header.jsx';
import { Footer } from './modules/Footer/Footer.jsx';

export const App = () => {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero__head-group">
              <h1 className="hero__title">Авторские букеты</h1>
              <p className="hero__subtitle">и подарки</p>
            </div>

            <figure className="hero__group-image">
              <picture className="hero__image hero__image_left">
                <source srcSet="/img/hero-left@1x.avif 1x, /img/hero-left@2x.avif 2x" type="image/avif" />
                <source srcSet="/img/hero-left@1x.webp 1x, /img/hero-left@2x.webp 2x" type="image/webp" />
                <img src="/img/hero-left@1x.jpg" srcSet="/img/hero-left@2x.jpg 2x"
                     alt="Букет цветов в банке. В бкете ярко-оранжевые розы, оранжевые тюльпаны и львиный зев.
                     Дополнительно в композию включены белые цветы и зеленые элементы,
                     придающие букету объем и разнообразие" />
              </picture>

              <svg className="hero__image hero__image_center" role="img"
                   aria-label="Букет цветов в вазе, включающий нежные розовые розы,
                   розовые хризантемы и другие цветы пастельных цветов, размещенные в беловй вазе в форме головы."
                   width="680" height="588" viewBox="0 0 680 588" fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                   xmlnsXlink="http://www.w3.org/1999/xlink"
                   preserveAspectRatio="xMidYMid slice">
                <clipPath id="hero">
                  <path
                    d="M680 112.187C680 137.954 653.568 161.688 609.146 180.61C653.568 211.682 680 250.658 680 292.973C680 335.869 652.836 375.335 607.304 406.613C652.836 425.66 680 449.692 680 475.813C680 537.649 527.777 587.776 340 587.776C152.223 587.776 0 537.649 0 475.813C0 449.692 27.1636 425.66 72.6961 406.613C27.1636 375.335 0 335.869 0 292.973C0 250.658 26.4319 211.682 70.854 180.61C26.4319 161.688 0 137.954 0 112.187C0 50.3515 152.223 0.223633 340 0.223633C527.777 0.223633 680 50.3515 680 112.187Z" />
                </clipPath>

                <foreignObject clipPath="url(#hero)" width="100%" height="100%">
                  <div className="hero__image-center"></div>
                </foreignObject>

              </svg>


              <picture className="hero__image hero__image_right">
                <source
                  srcSet="/img/hero-right@1x.avif 1x, /img/hero-right@2x.avif 2x" type="image/avif" />
                <source
                  srcSet="/img/hero-right@1x.webp 1x, /img/hero-right@2x.webp 2x" type="image/webp" />
                <img src="/img/hero-right@1x.jpg" srcSet="/img/hero-right@2x.jpg 2x"
                     alt="Букет цветов в банке. В букете ярко-оранжевые розы, оранжевые тюльпаны и львиный зев.
                     Дополнительно в композию включены белые цветы и зеленые элементы,
                     придающие букету объем и разнообразие" />
              </picture>
            </figure>
          </div>
        </section>

        <section className="filter">
          <h2 className="visually-hidden"></h2>
          <div className="container">
            <form className="filter__form">
              <fieldset className="filter__group">
                <input className="filter__radio" type="radio" name="type" value="bouquets" id="flower" defaultChecked />
                <label className="filter__label filter__label_flower" htmlFor="flower">Цветы</label>

                <input className="filter__radio" type="radio" name="type" value="toys" id="toys" />
                <label className="filter__label filter__label_toys" htmlFor="toys">Игрушки</label>

                <input className="filter__radio" type="radio" name="type" value="postcards" id="postcard" />
                <label className="filter__label filter__label_postcard" htmlFor="postcard">Открытки</label>
              </fieldset>

              <fieldset className="filter__group filter__group_choices">
                <div className="filter__choices choices">
                  <button className="filter__select choices__btn" type="button">Цена</button>

                  <div className="choices__box filter__choices-box">
                    <fieldset className="filter__price">
                      <input className="filter__input-price" type="text" name="minPrice" placeholder="от" />
                      <input className="filter__input-price" type="text" name="maxPrice" placeholder="до" />
                    </fieldset>
                  </div>
                </div>

                <div className="filter__choices filter__choices_type choices">
                  <button className="filter__select choices__btn" type="button">Тип товара</button>

                  <div
                    className="choices__box filter__choices-box filter__choices-box_type">
                    <ul className="filter__type-list">
                      <li className="filter__type-item">
                        <button className="filter__type-button" type="button">Монобукеты</button>
                      </li>
                      <li className="filter__type-item">
                        <button className="filter__type-button" type="button">Авторские букеты</button>
                      </li>
                      <li className="filter__type-item">
                        <button className="filter__type-button" type="button">Цветы в коробке</button>
                      </li>
                      <li className="filter__type-item">
                        <button className="filter__type-button" type="button">Цветы в корзине</button>
                      </li>
                      <li className="filter__type-item">
                        <button className="filter__type-button" type="button">Букеты из сухоцветов</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </section>

        <section className="goods">
          <div className="container goods__container">
            <div className="goods__box">
              <h2 className="goods__title">Цветы</h2>

              <ul className="goods__list">
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
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/39.jpg"
                         alt="Букет из роз Grand Avalanche (101 шт)" />
                    <div className="card__content">
                      <h3 className="card__title">Букет из роз Grand Avalanche (101 шт)</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">14800&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/40.jpg"
                         alt="Букет из роз Grand Vanilla Cream (101 шт)" />
                    <div className="card__content">
                      <h3 className="card__title">Букет из роз Grand Vanilla Cream (101 шт)</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">19800&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/41.jpg"
                         alt="Букет из роз Grand Mirabel (101 шт)" />
                    <div className="card__content">
                      <h3 className="card__title">Букет из роз Grand Mirabel (101 шт)</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">21300&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/42.jpg"
                         alt="Букет 101 Эквадорская роза микс" />
                    <div className="card__content">
                      <h3 className="card__title">Букет 101 Эквадорская роза микс</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">14200&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/43.jpg"
                         alt="Букет Mona Lisa (Дельфиниум)" />
                    <div className="card__content">
                      <h3 className="card__title">Букет Mona Lisa (Дельфиниум)</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">13600&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/1.jpg"
                         alt="Авторский букет из роз, диантусов и сухоцветов" />
                    <div className="card__content">
                      <h3 className="card__title">Авторский букет из роз, диантусов и сухоцветов</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">3000&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/2.jpg"
                         alt="Авторский букет из роз, герберов, диантусов и сухоцветов" />
                    <div className="card__content">
                      <h3 className="card__title">Авторский букет из роз, герберов, диантусов и сухоцветов</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">2000&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/3.jpg"
                         alt="Авторский букет из роз и сухоцветов" />
                    <div className="card__content">
                      <h3 className="card__title">Авторский букет из роз и сухоцветов</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">2200&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/4.jpg"
                         alt="Монобукет из тюльпанов" />
                    <div className="card__content">
                      <h3 className="card__title">Монобукет из тюльпанов</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">1600&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/5.jpg"
                         alt="Авторский букет из роз и диантусов" />
                    <div className="card__content">
                      <h3 className="card__title">Авторский букет из роз и диантусов</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">2700&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/6.jpg"
                         alt="Монобукет из сухоцветов" />
                    <div className="card__content">
                      <h3 className="card__title">Монобукет из сухоцветов</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">1500&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/7.jpg"
                         alt="Цветы в коробке с лилиями и орхидеями" />
                    <div className="card__content">
                      <h3 className="card__title">Цветы в коробке с лилиями и орхидеями
                      </h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">3400&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/8.jpg"
                         alt="Авторский букет из лилий и хризантем" />
                    <div className="card__content">
                      <h3 className="card__title">Авторский букет из лилий и хризантем
                      </h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">2900&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/9.jpg"
                         alt="Монобукет из пионов" />
                    <div className="card__content">
                      <h3 className="card__title">Монобукет из пионов</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">2500&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/10.jpg"
                         alt="Цветы в корзине с разноцветными ранункулюсами" />
                    <div className="card__content">
                      <h3 className="card__title">Цветы в корзине с разноцветными ранункулюсами</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">3800&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/11.jpg"
                         alt="Букет из сухоцветов и лаванды" />
                    <div className="card__content">
                      <h3 className="card__title">Букет из сухоцветов и лаванды</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">1700&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/12.jpg"
                         alt="Цветы в коробке из гербер и ирисов" />
                    <div className="card__content">
                      <h3 className="card__title">Цветы в коробке из гербер и ирисов</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">3200&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/13.jpg"
                         alt="Цветы в корзине с миксом весенних цветов" />
                    <div className="card__content">
                      <h3 className="card__title">Цветы в корзине с миксом весенних цветов</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">3600&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/14.jpg"
                         alt="Монобукет из ромашек" />
                    <div className="card__content">
                      <h3 className="card__title">Монобукет из ромашек</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">1400&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/15.jpg"
                         alt="Авторский букет из гладиолусов и альстромерий" />
                    <div className="card__content">
                      <h3 className="card__title">Авторский букет из гладиолусов и альстромерий</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">3100&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/16.jpg"
                         alt="Букет из сухоцветов с эвкалиптом" />
                    <div className="card__content">
                      <h3 className="card__title">Букет из сухоцветов с эвкалиптом</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">2000&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="goods__item">
                  <article className="goods__card card">
                    <img className="card__image" src="https://dull-rose-pawpaw.glitch.me/img/17.jpg"
                         alt="Цветы в коробке с суккулентами и каллами" />
                    <div className="card__content">
                      <h3 className="card__title">Цветы в коробке с суккулентами и каллами</h3>
                      <div className="card__footer">
                        <p className="card__date-delivery">сегодня в 14:00</p>
                        <button className="card__button">3700&nbsp;₽</button>
                      </div>
                    </div>
                  </article>
                </li>
              </ul>
            </div>

            <section className="cart cart_open">
              <div className="cart__container">
                <div className="cart__header">
                  <h3 className="cart__title">Ваш заказ</h3>

                  <button className="cart__close">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="5.70715" width="1" height="25" transform="rotate(-45 5 5.70715)" fill="#D17D2F" />
                      <rect x="22.6777" y="5" width="1" height="25" transform="rotate(45 22.6777 5)" fill="#D17D2F" />
                    </svg>
                  </button>
                </div>

                <p className="cart__date-delivery">сегодня в 14:00</p>

                <ul className="cart__list">
                  <li className="cart__item">
                    <img className="cart__img" src="https://dull-rose-pawpaw.glitch.me/img/39.jpg"
                         alt="Букет из роз Grand Avalanche (101 шт)" />
                    <h4 className="cart__item-title">Букет из роз Grand Avalanche (101 шт)</h4>
                    <div className="cart__counter">
                      <button className="cart__counter-btn">-</button>
                      <input className="cart__counter-input" type="number" max="99" min="0" value="1" />
                      <button className="cart__counter-btn">+</button>
                    </div>
                    <p className="cart__price">14800&nbsp;₽</p>
                  </li>
                  <li className="cart__item">
                    <img className="cart__img" src="https://dull-rose-pawpaw.glitch.me/img/38.jpg"
                         alt="Букет из тюльпан Dolche vita (51 шт)" />
                    <h4 className="cart__item-title">Букет из тюльпан Dolche vita (51 шт)</h4>
                    <div className="cart__counter">
                      <button className="cart__counter-btn">-</button>
                      <input className="cart__counter-input" type="number" max="99" min="0" value="2" />
                      <button className="cart__counter-btn">+</button>
                    </div>
                    <p className="cart__price">13400&nbsp;₽</p>
                  </li>
                  <li className="cart__item">
                    <img className="cart__img" src="https://dull-rose-pawpaw.glitch.me/img/41.jpg"
                         alt="Букет из роз Grand Mirabel (101 шт)" />
                    <h4 className="cart__item-title">Букет из роз Grand Mirabel (101 шт)</h4>
                    <div className="cart__counter">
                      <button className="cart__counter-btn">-
                      </button>
                      <input className="cart__counter-input" type="number" max="99" min="0" value="3" />
                      <button className="cart__counter-btn">+</button>
                    </div>
                    <p className="cart__price">63900&nbsp;₽</p>
                  </li>
                </ul>

                <div className="cart__footer">
                  <button className="cart__order-btn">Оформить</button>
                  <p className="cart__price cart__price_total">0&nbsp;₽</p>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="subscribe">
          <div className="container">
            <h2 className="subscribe__title">Подпишись на&nbsp;рассылку</h2>

            <form className="subscribe__form" action="#">
              <input className="subscribe__input" type="email" name="email" placeholder="E-mail" />

              <button className="subscribe__button" aria-label="подписаться на рассылку">
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.166687 6.66667C0.78502 6.66667 1.70835 6.05583 2.48335 5.4375C3.48335 4.6425 4.35585 3.6925 5.02169 2.60333C5.52085 1.78667 6.00002 0.796667 6.00002 0M6.00002 0C6.00002 0.796667 6.47919 1.7875 6.97835 2.60333C7.64502 3.6925 8.51752 4.6425 9.51585 5.4375C10.2917 6.05583 11.2167 6.66667 11.8334 6.66667M6.00002 0V20"
                    stroke="white" />
                </svg>
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />

      <div className="order" style={ { display: 'none' } }>
        <div className="order__wrapper">
          <h2 className="order__title">Оформить заказ</h2>
          <form className="order__form" id="order">
            <fieldset className="order__fieldset">
              <legend className="order__legend">Данные заказчика</legend>
              <div className="order__input-group">
                <input className="order__input" type="text" name="name-buyer" placeholder="Имя" />
                <input className="order__input" type="text" name="phone-buyer" placeholder="Телефон" />
              </div>
            </fieldset>
            <fieldset className="order__fieldset">
              <legend className="order__legend">Данные получателя</legend>
              <div className="order__input-group">
                <input className="order__input" type="text" name="name-recipient" placeholder="Имя" />
                <input className="order__input" type="text" name="phone-recipient" placeholder="Телефон" />
              </div>
            </fieldset>
            <fieldset className="order__fieldset">
              <legend className="order__legend">Адрес</legend>
              <div className="order__input-group">
                <input className="order__input" type="text" name="street" placeholder="Улица" />
                <input className="order__input order__input_min" type="text" name="house" placeholder="Дом" />
                <input className="order__input order__input_min" type="text" name="apartment" placeholder="Квартира" />
              </div>
            </fieldset>
            <fieldset className="order__fieldset">
              <div className="order__payment">
                <label className="order__label-radio">
                  <input className="order__radio" type="radio" name="payment-online"
                         value="true" defaultChecked />Оплата онлайн
                </label>
              </div>
              <div className="order__delivery">
                <label htmlFor="delivery">Доставка 01.07</label>
                <input type="hidden" name="delivery-date" value="01.07" />
                <div className="order__select-wrapper">
                  <select className="order__select" name="delivery-time" id="delivery">
                    <option value="9-12">с 9:00 до 12:00</option>
                    <option value="12-15">с 12:00 до 15:00</option>
                    <option value="15-18">с 15:00 до 18:00</option>
                    <option value="18-21">с 18:00 до 21:00</option>
                  </select>
                </div>
              </div>
            </fieldset>
          </form>
          <div className="order__footer">
            <p className="order__total">92100&nbsp;₽</p>
            <button className="order__button" type="submit" form="order">Заказать</button>
          </div>
        </div>
        <button className="order__close" type="button">×</button>
      </div>

      <div className="order" style={ { display: 'none' } }>
        <div className="order__wrapper">
          <h2 className="order__title">Заказ оформлен!</h2>
          <p className="order__id">Ваш номер заказа: 971f365a-caa1-4cdb-9446-bad2eff047e1</p>
        </div>
      </div>
    </>
  );
};
