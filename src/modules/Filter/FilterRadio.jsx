import styles from '@modules/Filter/Filter.module.scss';
import classNames from 'classnames';

export const FilterRadio = ({ handleTypeChange, data, type }) => {
  return (
    <>
      <input className={ styles.radio }
             type="radio"
             name="type"
             value={ data.value }
             id={ data.value }
             checked={ data.value === type }
             onClick={ handleTypeChange }
      />

      <label className={ classNames(styles.label, styles[`label_${ data.value }`]) }
             htmlFor={ data.value }
      >
        { data.title }
      </label>
    </>
  )
};
