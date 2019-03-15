import { actionTypes } from './actions.js';
import { screenNames } from '../constants';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SELECT_ITEM:
      return {
        ...state,
        itemIndex: action.payload,
        screenName: screenNames.SINGLE 
      };
    case actionTypes.SET_SCREEN:
      return {
        ...state,
        screenName: action.payload
      };
    case actionTypes.SET_TRACK:
      return {
        ...state,
        track: action.payload,
        screenName: screenNames.TRACK_MENU
      };
    default: throw new Error('Unexpected action');
  }
};

export default reducer;