import { actions } from './constants';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_SCREEN: return { ...state, screenName: action.payload };
    default: throw new Error('Unexpected action');
  }
};

export default reducer;