import styles from './Header.module.scss';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '@store/reducers/cartSlice.js';
import isValueString from '@utils/isValueString';
import { fetchGoods, setGoodsTitleValue } from '@store/reducers/goodsSlice';
import { clearFilters, setSearch } from '@store/reducers/filtersSlice';
import { useEffect, useRef } from 'react';
import debounce from '@utils/debounce';
import validFilters from '@utils/validFilters';

export const Header = ({ containerClass, buttonClass }) => {
  const dispatch = useDispatch();
  const cartCount = useSelector(state => state.cart.count);
  const coordYToScroll = useSelector(state => state.goods.title.pageYCoord);
  const search = useSelector(state => state.filters.search);

  const inputRef = useRef(null);
  const prevSearchRef = useRef(search);
  const debouncedFetchGoods = useRef(
    debounce((search) => {
      dispatch(fetchGoods(search));
    }, 400),
  ).current;

  useEffect(() => {
    /* * Works on click or press Enter key
     ? With real time input, the check does not work
     ? but the browser still caches the request
     ? so I see no reason to complicate the check
     */
    const prevSearch = prevSearchRef.current;
    if (prevSearch === search) return;

    if (search.length === 0) setSearch('');

    const whatSearch = isValueString(search) ? { search: search.toLowerCase() } : { list: search };
    const validSearch = validFilters(whatSearch);
    debouncedFetchGoods(validSearch);
  }, [debouncedFetchGoods, dispatch, search]);


  const handlerCartToggle = () => dispatch(toggleCart());

  const onSearch = (value) => {
    dispatch(clearFilters());
    dispatch(setGoodsTitleValue('Найденные товары'));
    dispatch(setSearch(value));
  };

  const handleSearchPressing = (e) => {
    e.preventDefault();
    onSearch(inputRef.current.value);
    window.scrollTo({ top: coordYToScroll, behavior: 'smooth' });
  };

  return (
    <header className={ styles.header }>
      <div className={ classNames(containerClass, styles.container) }>
        <form className={ styles.form } action="#">
          <input className={ styles.input }
                 type="search"
                 name="search"
                 placeholder="Букет из роз"
                 onChange={ e => onSearch(e.currentTarget.value) }
                 ref={ inputRef }
          />

          <button className={ buttonClass }
                  aria-label="Начать поиск"
                  onClick={ handleSearchPressing }
          >
            <svg width="20"
                 height="20"
                 viewBox="0 0 20 20"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.3333 4.16663C13.3333 4.78496 13.9442 5.70829 14.5625 6.48329C15.3575 7.48329 16.3075 8.35579 17.3967 9.02163C18.2133 9.52079 19.2033 9.99996 20 9.99996M20 9.99996C19.2033 9.99996 18.2125 10.4791 17.3967 10.9783C16.3075 11.645 15.3575 12.5175 14.5625 13.5158C13.9442 14.2916 13.3333 15.2166 13.3333 15.8333M20 9.99996H4.76837e-07"
                stroke="white"
              />
            </svg>
          </button>
        </form>

        <img className={ styles.logo } src="/img/logo.svg" alt="Логотип Mirano Flower Boutique" />

        <button className={ styles['cart-button'] }
                onClick={ handlerCartToggle }>
          { cartCount }
        </button>
      </div>
    </header>
  )
};
