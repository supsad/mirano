import styles from './Choices.module.scss';
import { ChoicesBox } from '@modules/ChoicesBox/ChoicesBox.jsx';

export const Choices = ({ buttonLabel, onToggle, isOpen, children, position }) => (
  <div className={ styles.choices }>
    <button className={ styles.select }
            type="button"
            onClick={ onToggle }>
      { buttonLabel }
    </button>

    {
      isOpen &&
      <ChoicesBox position={ position }>
        { children }
      </ChoicesBox>
    }
  </div>
);
