import styles from './Filter.module.scss';
import { Choices } from '@modules/Choices/Choices.jsx';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { fetchGoods, setGoodsTitle } from '@store/reducers/goodsSlice.js';
import getValidFilters from '@utils/validFilters';
import debounce from '@utils/debounce';

export const Filter = ({ titleClass, containerClass }) => {
  const dispatch = useDispatch();
  const [openChoices, setOpenChoices] = useState(null);
  const [filters, setFilters] = useState({
    type: 'bouquets',
    minPrice: '',
    maxPrice: '',
    category: '',
  });

  const prevFilterRef = useRef(filters);

  const debouncedFetchGoods = useRef(
    debounce((filters) => {
      dispatch(fetchGoods(filters));
    }, 350),
  ).current;

  useEffect(() => {
    const prevFilters = prevFilterRef.current;
    const validFilter = getValidFilters(filters);
    
    if (prevFilters.type !== filters.type) {
      dispatch(fetchGoods(validFilter));
    } else {
      debouncedFetchGoods(filters);
    }

    prevFilterRef.current = filters;
  }, [debouncedFetchGoods, dispatch, filters]);

  const handleTypeChange = ({ currentTarget }) => {
    if (currentTarget.value === filters.type) return;
    const newFilters = {
      ...filters,
      type: currentTarget.value,
      minPrice: '',
      maxPrice: ''
    };
    setFilters(newFilters);
    dispatch(setGoodsTitle(currentTarget.labels[0].innerText));
  };

  const handlePriceChange = ({ currentTarget }) => {
    if (currentTarget.value === filters.type) return;
    const { name, value } = currentTarget;

    setFilters({
      ...filters,
      [name]: !isNaN(parseInt(value)) ? value : '',
    });
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
                     isOpen={ openChoices === 0 }
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
};
