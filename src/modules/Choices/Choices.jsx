import styles from './Choices.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

export const Choices = ({ children, buttonLabel, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(oldIsOpen => !oldIsOpen);

  return (
    <div className={ styles.choices }>
      <button
        className={ styles.select }
        type="button"
        onClick={ handleToggle }>
        { buttonLabel }
      </button>
      {
        isOpen &&
        <div className={ classNames(styles.container, className) }>
          { children }
        </div>
      }
    </div>
  )
};
