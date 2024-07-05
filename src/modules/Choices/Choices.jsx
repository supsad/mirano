import styles from './Choices.module.scss';
import classNames from 'classnames';

const TYPES = ['price', 'type'];

export const Choices = ({ type }) => {
  const isOpen = false;

  if (!isOpen || type === undefined || type === null || type === '') return null;

  return (
    <div className={ classNames(styles.choices, styles.choices_open) }>
      {
        type.toLowerCase() === TYPES[0] ? (
          <fieldset className={ styles.price }>
            <input
              className={ styles['input-price'] }
              type="text"
              name="minPrice"
              placeholder="от" />
            <input
              className={ styles['input-price'] }
              type="text"
              name="maxPrice"
              placeholder="до" />
          </fieldset>
        ) : (
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
        )
      }
    </div>
  )
};
