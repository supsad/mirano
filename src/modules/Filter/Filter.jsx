import './filter.scss';
import { Choices } from '../Choices/Choices.jsx';

export const Filter = () => (
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

          <Choices />
        </fieldset>
      </form>
    </div>
  </section>
);