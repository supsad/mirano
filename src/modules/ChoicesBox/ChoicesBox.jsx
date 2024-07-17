import classNames from 'classnames';
import styles from './ChoicesBox.module.scss';
import useWindowDimensions from '@hooks/useWindowDimensions.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setChoicesClass } from '@store/reducers/choicesSlice';

export const ChoicesBox = ({ children, position, isOpen }) => {
  const dispatch = useDispatch();
  const className = useSelector(state => state.choices.className);
  const { width } = useWindowDimensions(1000);

  useEffect(() => {
    if (isOpen) {
      dispatch(setChoicesClass({ position, width }));
    }
  }, [dispatch, isOpen, position, width]);

  return (
    <div className={ classNames(styles['choices-box'], styles[className]) }>
      { children }
    </div>
  )
}
