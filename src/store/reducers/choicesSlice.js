import { createSlice } from '@reduxjs/toolkit';

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

const WindowSizesPx = {
  DESKTOP: 1440,
  LAPTOP: 768,
  MOBILE: 520,
};

const classList = {
  left: {
    100: 'choices-box_left-100',
    105: 'choices-box_left-105',
    130: 'choices-box_left-130',
    defaultClass: 'choices-box_left',
  },

  right: {
    defaultClass: 'choices-box_right',
  },
};

const initialState = {
  className: '',
};

const choicesSlice = createSlice({
  name: 'choices',
  initialState,
  reducers: {
    setChoicesClass: (state, action) => {
      const { position, width } = action.payload;
      const {
        '105': pos105,
        '130': pos130,
      } = classList.left;

      switch (position) {
        case 'left':
          if (width <= WindowSizesPx.MOBILE) {
            state.className = pos105;
            break;
          } else if (width <= 850 && width > WindowSizesPx.LAPTOP) {
            state.className = pos130;
            break
          }

          state.className = '';
          break;

        case 'right':
          if (width >= WindowSizesPx.DESKTOP) {
            state.className = '';
            break;
          } else if (width >= WindowSizesPx.LAPTOP) {
            state.className = classList.right.defaultClass;
            break;
          }

          state.className = '';
          break;

        default:
          state.className = '';
      }
    }
  },
});

export const { setChoicesClass } = choicesSlice.actions;

export default choicesSlice.reducer;
