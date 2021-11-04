/* eslint-disable no-param-reassign */
/** StringStoreHomeReducer
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action, add it
 * to the switch statement in the reducer function.
 *
 */

import produce from 'immer';
import { CHANGE_STRING } from './constants';

export const initialState = {
  string: '',
};

const stringStoreHomeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_STRING:
        draft.string = action.payload;
        break;
      default:
        draft.string = state.string;
        break;
    }
  });

export default stringStoreHomeReducer;
