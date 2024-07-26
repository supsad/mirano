import styles from './Header.module.scss';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '@store/reducers/cartSlice.js';
import isValueString from '@utils/isValueString';
import { fetchGoods, setGoodsTitleValue } from '@store/reducers/goodsSlice';
import { clearFilters } from '@store/reducers/filtersSlice';
import { useEffect, useRef, useState } from 'react';
import debounce from '@utils/debounce';
import { setSearch } from '@store/reducers/searchSlice';

export const Header = ({ containerClass, buttonClass }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const coordYToScroll = useSelector(state => state.goods.title.pageYCoord);
  const search = useSelector(state => state.search.query);

  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const [itemsCount, setItemsCount] = useState(0);

  const inputRef = useRef(null);
  const prevSearchRef = useRef(search);

  const debouncedSetSearch = useRef(
    debounce((value) => {
      dispatch(setSearch(value));
    }, 350),
  ).current;

  useEffect(() => {
    const prevSearch = prevSearchRef.current;

    if (prevSearch === search) return;
    if (search.length === 0 || search === '') {
      setButtonIsDisabled(true);
      setSearch('');
      return;
    }

    dispatch(clearFilters());
    dispatch(setGoodsTitleValue(`Товары по запросу: ${ search }`));
    dispatch(fetchGoods(isValueString(search) ? { search: search.toLowerCase() } : { list: search }));

    prevSearchRef.current = search;
  }, [dispatch, search]);

  useEffect(() => {
    setItemsCount(items.reduce((acc, item) => acc + item.quantity, 0));
  }, [items]);


  const handlerCartToggle = () => dispatch(toggleCart());

  const onSearch = (value, type) => {
    value.length > 0 && setButtonIsDisabled(false);

    if (type === 'input') {
      debouncedSetSearch(value);
      return;
    }

    dispatch(setSearch(value));
    inputRef.current.value = '';
    setButtonIsDisabled(true);
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
                 onChange={ e =>
                   onSearch(e.currentTarget.value, 'input')
                 }
                 ref={ inputRef }
          />

          <button className={ buttonIsDisabled ? classNames(buttonClass, styles['search-button']) : buttonClass }
                  aria-label="Начать поиск"
                  onClick={ handleSearchPressing }
                  disabled={ buttonIsDisabled }
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
          { itemsCount }
        </button>
      </div>
    </header>
  )
};
