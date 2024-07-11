import styles from './Filter.module.scss';
import { Choices } from '@modules/Choices/Choices.jsx';
import { useState } from 'react';
import classNames from 'classnames';

export const Filter = ({ titleClass, containerClass }) => {
  const [openChoices, setOpenChoices] = useState(null);

  const handleChoicesToggle = (index) => {
    setOpenChoices(openChoices === index ? null : index);
  }

  return (
    <section>
      <h2 className={ titleClass }></h2>
      <div className={ containerClass }>
        <form className={ styles.form }>
          <fieldset className={ styles.group }>
            <input className={ styles.radio }
                   type="radio"
                   name="type"
                   value="bouquets"
                   id="flower"
                   defaultChecked
            />
            <label className={ classNames(styles.label, styles.label_flower) }
                   htmlFor="flower">
              Цветы
            </label>

            <input className={ styles.radio }
                   type="radio"
                   name="type"
                   value="toys"
                   id="toys"
            />
            <label className={ classNames(styles.label, styles.label_toys) }
                   htmlFor="toys">
              Игрушки
            </label>

            <input className={ styles.radio }
                   type="radio"
                   name="type"
                   value="postcards"
                   id="postcard"
            />
            <label className={ classNames(styles.label, styles.label_postcard) }
                   htmlFor="postcard">
              Открытки
            </label>
          </fieldset>

          <fieldset className={ classNames(styles.group, styles.group_choices) }>
            <Choices buttonLabel={ 'Цена' }
                     isOpen={ openChoices === 0 }
                     onToggle={ () => handleChoicesToggle(0) }>
              <fieldset className={ styles.price }>
                <input className={ styles['input-price'] }
                       type="text"
                       name="minPrice"
                       placeholder="от"
                />
                <input className={ styles['input-price'] }
                       type="text"
                       name="maxPrice"
                       placeholder="до"
                />
              </fieldset>
            </Choices>


            <Choices buttonLabel={ 'Тип товара' }
                     isOpen={ openChoices === 1 }
                     onToggle={ () => handleChoicesToggle(1) }>
              <ul>
                <li className={ styles['type-item'] }>
                  <button className={ styles['type-button'] } type="button">Монобукеты</button>
                </li>
                <li className={ styles['type-item'] }>
                  <button className={ styles['type-button'] } type="button">Авторские букеты</button>
                </li>
                <li className={ styles['type-item'] }>
                  <button className={ styles['type-button'] } type="button">Цветы в коробке</button>
                </li>
                <li className={ styles['type-item'] }>
                  <button className={ styles['type-button'] } type="button">Цветы в корзине</button>
                </li>
                <li className={ styles['type-item'] }>
                  <button className={ styles['type-button'] } type="button">Букеты из сухоцветов</button>
                </li>
              </ul>
            </Choices>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
