import React, { useReducer} from 'react';
import { initialState, reducer, setScreen } from '../store';
import { screenNames } from '../constants';

function ActiveScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function renderScreen() {
    const { screenName } = state;
    switch (screenName) {
      case screenNames.MAIN_MENU:
        return (
          <h1>MainMenu</h1>
        )
      default: return null
    }
  }
  return (
    <>
      <button onClick={() => dispatch(setScreen(screenNames.MAIN_MENU))}>click</button>
      {renderScreen()}
    </>
  )
  
}

export default ActiveScreen;