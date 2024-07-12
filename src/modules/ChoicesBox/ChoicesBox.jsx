import classNames from 'classnames';
import styles from './ChoicesBox.module.scss';
import useWindowDimensions from '@hooks/useWindowDimensions.js';

const WindowSizesPx = {
  DESKTOP: 1440,
  LAPTOP: 768,
  MOBILE: 520,
};

/* * Position choices container in layout
* In order to ensure that the size of the ChoicesBox does not go beyond the screen,
* it was necessary to write a custom hook to determine the size of the user screen
*
* Optimization was required, since the hook from behind the wrapper always worked.
* I had to split them into two components so that the hook would only work when the modal box was open
*
* An attempt to move all the logic into the parent Filter component was unsuccessful,
* since it is impossible to nest an object in the children argument of Choices
* */

export const ChoicesBox = ({ children, position }) => {
  let containerClass;
  const { width } = useWindowDimensions(1000);
  console.log(width);

  switch (position) {
    case 'left':
      if (width <= WindowSizesPx.MOBILE) {
        containerClass = styles['choices-box_left-105'];
        break;
      } else if (width <= 850 && width > WindowSizesPx.LAPTOP) {
        containerClass = styles['choices-box_left-130'];
        break
      }

      containerClass = '';
      break;

    case 'right':
      if (width >= WindowSizesPx.DESKTOP) {
        containerClass = '';
        break;
      } else if (width >= WindowSizesPx.LAPTOP) {
        containerClass = styles['choices-box_right'];
        break;
      }

      containerClass = '';
      break;

    default:
      containerClass = '';
  }

  return (
    <div className={ classNames(styles['choices-box'], containerClass) }>
      { children }
    </div>
  )
}
