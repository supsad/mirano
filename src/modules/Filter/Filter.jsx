import styles from './Filter.module.scss';
import { Choices } from '@modules/Choices/Choices.jsx';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods, setGoodsTitleValue } from '@store/reducers/goodsSlice';
import getValidFilters from '@utils/validFilters';
import debounce from '@utils/debounce';
import { changeCategory, clearFilters, setFilters } from '@store/reducers/filtersSlice';
import isValueString from '@utils/isValueString';
import { FilterRadio } from '@modules/Filter/FilterRadio';
import { setSearch } from '@store/reducers/searchSlice';

const FilterTypes = [
  { value: 'bouquets', title: 'Цветы' },
  { value: 'toys', title: 'Игрушки' },
  { value: 'postcards', title: 'Открытки' },
];

export const Filter = ({ titleClass, containerClass }) => {
  const dispatch = useDispatch();
  const [openChoice, setOpenChoice] = useState(null);
  const filters = useSelector(state => state.filters);
  const search = useSelector(state => state.search.query);
  const categories = useSelector(state => state.goods.categories);

  const prevFilterRef = useRef(filters);
  const debouncedFetchGoods = useRef(
    debounce((filters) => {
      dispatch(fetchGoods(filters));
    }, 400),
  ).current;

  useEffect(() => {
    const prevFilters = prevFilterRef.current;

    let validQuery = getValidFilters(Object.assign({ search }, filters));

    if (
      Object.keys(validQuery).length === 0
      && (!validQuery.type || !validQuery.search)
      && (validQuery.search && validQuery.type)
    ) {
      return;
    }

    if (prevFilters.type !== validQuery.type && !validQuery.search) {
      dispatch(fetchGoods(validQuery));
    } else {
      debouncedFetchGoods(validQuery);
    }

    prevFilterRef.current = filters;
  }, [debouncedFetchGoods, dispatch, filters, search]);

  const handleTypeChange = ({ currentTarget }) => {
    if (currentTarget.value === filters.type) return;
    dispatch(clearFilters());
    dispatch(setSearch(''));
    dispatch(setFilters({ type: currentTarget.value }));
    dispatch(setGoodsTitleValue(currentTarget.labels[0].innerText));
    setOpenChoice(-1);
  };

  const handlePriceChange = ({ currentTarget }) => {
    if (currentTarget.value === filters.type) return;
    const { name, value } = currentTarget;

    dispatch(setFilters({ [name]: !isValueString(value) ? value : '' }));
  };

  const handleChoicesToggle = (index) => {
    setOpenChoice(openChoice === index ? null : index);
  };

  const handleCategoryChange = (category) => {
    dispatch(changeCategory(category));
    setOpenChoice(null);
  };

  return (
    <section>
      <h2 className={ titleClass }></h2>
      <div className={ containerClass }>
        <form className={ styles.form }>
          <fieldset className={ styles.group }>
            {
              FilterTypes.map(item => {
                return (
                  <FilterRadio key={ item.value }
                               handleTypeChange={ handleTypeChange }
                               data={ item }
                               type={ filters.type }
                  />
                )
              })
            }
          </fieldset>

          <fieldset className={ classNames(styles.group, styles.group_choices) }>
            <Choices buttonLabel={ 'Цена' }
                     onToggle={ () => handleChoicesToggle(0) }
                     isOpen={ openChoice === 0 }
              // FIXME: position
                     position={ categories.length ? 'left' : 'right' }
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

            {
              categories.length
                ?
                <Choices buttonLabel={ 'Тип товара' }
                         onToggle={ () => handleChoicesToggle(1) }
                         isOpen={ openChoice === 1 }
                         position={ 'right' }
                >
                  <ul>
                    <li className={ styles['type-item'] }>
                      <button className={ styles['type-button'] }
                              type="button"
                              onClick={ () => handleCategoryChange('') }
                      >
                        Все товары
                      </button>
                    </li>
                    {
                      categories.map(category =>
                        <li key={ category } className={ styles['type-item'] }>
                          <button className={ styles['type-button'] }
                                  type="button"
                                  onClick={ () => handleCategoryChange(category) }
                          >
                            { category }
                          </button>
                        </li>
                      )
                    }
                  </ul>
                </Choices>
                :
                null
            }
          </fieldset>
        </form>
      </div>
    </section>
  );
};
