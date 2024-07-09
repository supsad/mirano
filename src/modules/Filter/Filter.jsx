import styles from './Filter.module.scss';
import { Choices } from '@modules/Choices/Choices.jsx';
import classNames from 'classnames';

export const Filter = ({ titleClass, containerClass }) => (
  <section>
    <h2 className={ titleClass }></h2>
    <div className={ containerClass }>
      <form className={ styles.form }>
        <fieldset className={ styles.group }>
          <input
            className={ styles.radio }
            type="radio"
            name="type"
            value="bouquets"
            id="flower"
            defaultChecked />
          <label
            className={ classNames(styles.label, styles.label_flower) }
            htmlFor="flower">
            Цветы
          </label>

          <input
            className={ styles.radio }
            type="radio"
            name="type"
            value="toys"
            id="toys" />
          <label
            className={ classNames(styles.label, styles.label_toys) }
            htmlFor="toys">
            Игрушки
          </label>

          <input
            className={ styles.radio }
            type="radio"
            name="type"
            value="postcards"
            id="postcard" />
          <label
            className={ classNames(styles.label, styles.label_postcard) }
            htmlFor="postcard">
            Открытки
          </label>
        </fieldset>

        <fieldset className={ classNames(styles.group, styles.group_choices) }>
          <div className={ styles.choices }>
            <button className={ styles.select } type="button">Цена</button>
            <Choices type={ 'price' } />
          </div>

          <div className={ styles.choices }>
            <button className={ styles.select } type="button">Тип товара</button>
            <Choices type={ 'type' } />
          </div>
        </fieldset>
      </form>
    </div>
  </section>
);
