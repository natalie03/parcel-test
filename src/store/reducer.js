import { actionTypes } from './actions.js';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SCREEN:
      return { ...state, screenName: action.payload };
    case actionTypes.SET_TRACK:
      return { ...state, track: action.payload };
    default: throw new Error('Unexpected action');
  }
};

export default reducer;