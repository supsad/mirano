import styles from './Filter.module.scss';
import { Choices } from '@modules/Choices/Choices.jsx';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods, setGoodsType } from '@store/reducers/goodsSlice.js';

export const Filter = ({ titleClass, containerClass }) => {
  const dispatch = useDispatch();
  const [openChoices, setOpenChoices] = useState(null);
  const [firstGoodsRender, setFirstGoodsRender] = useState(true);
  const {
    'default-type': defaultGoodsType,
    rendered: whatGoodsRendered,
    title: defaultGoodsTitle } = useSelector(state => state.goods.type);

  useEffect(() => {
    if (firstGoodsRender) {
      dispatch(fetchGoods({ type: defaultGoodsType }));
      dispatch(setGoodsType({ rendered: defaultGoodsType, title: defaultGoodsTitle }));
      setFirstGoodsRender(false);
    }
  }, [defaultGoodsTitle, defaultGoodsType, dispatch, firstGoodsRender]);

  const handleTypeToggle = ({ currentTarget }) => {
    if (currentTarget.value === whatGoodsRendered) return;

    dispatch(fetchGoods({ type: currentTarget.value }));
    dispatch(setGoodsType({ rendered: currentTarget.value, title: currentTarget.labels[0].innerText }));
  };

  // TODO: migrate in redux to control the closing state throughout the document
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
                   onClick={ handleTypeToggle }
            />
            <label className={ classNames(styles.label, styles.label_flower) }
                   htmlFor="flower"
            >
              Цветы
            </label>

            <input className={ styles.radio }
                   type="radio"
                   name="type"
                   value="toys"
                   id="toys"
                   onClick={ handleTypeToggle }
            />
            <label className={ classNames(styles.label, styles.label_toys) }
                   htmlFor="toys"
            >
              Игрушки
            </label>

            <input className={ styles.radio }
                   type="radio"
                   name="type"
                   value="postcards"
                   id="postcard"
                   onClick={ handleTypeToggle }
            />
            <label className={ classNames(styles.label, styles.label_postcard) }
                   htmlFor="postcard"
            >
              Открытки
            </label>
          </fieldset>

          <fieldset className={ classNames(styles.group, styles.group_choices) }>
            <Choices buttonLabel={ 'Цена' }
                     onToggle={ () => handleChoicesToggle(0) }
                     isOpen={ openChoices === 0 }
                     position={ 'left' }
            >
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
                     onToggle={ () => handleChoicesToggle(1) }
                     isOpen={ openChoices === 1 }
                     position={ 'right' }
            >
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
