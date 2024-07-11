import styles from './Choices.module.scss';
import classNames from 'classnames';

export const Choices = ({ children, buttonLabel, className, isOpen, onToggle }) => (
  <div className={ styles.choices }>
    <button className={ styles.select }
            type="button"
            onClick={ onToggle }>
      { buttonLabel }
    </button>
    {
      isOpen &&
      <div className={ classNames(styles.container, className) }>
        { children }
      </div>
    }
  </div>
);
