import { actionTypes } from './actions.js';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SCREEN:
      return { ...state, screenName: action.payload };
    default: throw new Error('Unexpected action');
  }
};

export default reducer;