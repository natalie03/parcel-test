import React, { useReducer, useState } from 'react';
import { Weather, Background, MainMenu } from './components';
import { HiddenReset } from 'bli-util-react';
import { initialState, reducer} from './store';
import { screenNames } from './constants';
import { setScreen } from './store';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleReset() {
    console.log("reset")
  }

  function renderScreen() {
    const { screenName } = state;
    switch (screenName) {
      case screenNames.MAIN_MENU:
        return (
          <h1>MainMenu</h1>
        )
    }
  }
  return (
    <>
      <HiddenReset onReset={handleReset} />
      <Background colors={[['#99B2DD', '#3A405A'], ['#F9DEC9', '#E9AFA3']]} />
      <div className="body">
        <Weather />
        {renderScreen()}
        <button onClick={() => dispatch(setScreen(screenNames.MAIN_MENU))}>click</button>
      </div>
    </>
  )
}

export default App;