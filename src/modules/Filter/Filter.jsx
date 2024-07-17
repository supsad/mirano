import styles from './Filter.module.scss';
import { Choices } from '@modules/Choices/Choices.jsx';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods, setGoodsTitleValue } from '@store/reducers/goodsSlice';
import getValidFilters from '@utils/validFilters';
import debounce from '@utils/debounce';
import { clearFilters, setFilters } from '@store/reducers/filtersSlice';
import isValueString from '@utils/isValueString';

export const Filter = ({ titleClass, containerClass }) => {
  const dispatch = useDispatch();
  const [openChoice, setOpenChoice] = useState(null);
  const filters = useSelector(state => state.filters.filters);

  const prevFilterRef = useRef(filters);
  const debouncedFetchGoods = useRef(
    debounce((filters) => {
      dispatch(fetchGoods(filters));
    }, 400),
  ).current;

  useEffect(() => {
    const prevFilters = prevFilterRef.current;
    const validFilter = getValidFilters(filters);

    if (Object.keys(validFilter).length === 0) return;

    if (prevFilters.type !== filters.type) {
      setOpenChoice(null);
      dispatch(fetchGoods(validFilter));
    } else {
      debouncedFetchGoods(validFilter);
    }

    prevFilterRef.current = filters;
  }, [debouncedFetchGoods, dispatch, filters]);

  const handleTypeChange = ({ currentTarget }) => {
    if (currentTarget.value === filters.type) return;
    dispatch(clearFilters());
    dispatch(setFilters({ type: currentTarget.value }));
    dispatch(setGoodsTitleValue(currentTarget.labels[0].innerText));
  };

  const handlePriceChange = ({ currentTarget }) => {
    if (currentTarget.value === filters.type) return;
    const { name, value } = currentTarget;

    dispatch(setFilters({ [name]: !isValueString(value) ? value : '' }));
  };

  const handleChoicesToggle = (index) => {
    setOpenChoice(openChoice === index ? null : index);
  };

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
                   checked={ 'bouquets' === filters.type }
                   onClick={ handleTypeChange }
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
                   checked={ 'toys' === filters.type }
                   onClick={ handleTypeChange }
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
                   checked={ 'postcards' === filters.type }
                   onClick={ handleTypeChange }
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
                     isOpen={ openChoice === 0 }
                     position={ 'left' }
            >
              <fieldset className={ styles.price }>
                <input className={ styles['input-price'] }
                       type="text"
                       name="minPrice"
                       placeholder="от"
                       value={ filters.minPrice }
                       onChange={ handlePriceChange }
                />
                <input className={ styles['input-price'] }
                       type="text"
                       name="maxPrice"
                       placeholder="до"
                       value={ filters.maxPrice }
                       onChange={ handlePriceChange }
                />
              </fieldset>
            </Choices>


            <Choices buttonLabel={ 'Тип товара' }
                     onToggle={ () => handleChoicesToggle(1) }
                     isOpen={ openChoice === 1 }
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
};
