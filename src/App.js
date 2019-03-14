import React, { useReducer, useState } from 'react';
import { Weather, Background } from './components';
import { HiddenReset } from 'bli-util-react';
import reducer from './reducer';
import { screenNames } from './constants';

function App() {
  const initialState = {
    screenName: screenNames.IDLE,
    track: ''
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleReset() {
    console.log("reset")
  }

  function renderScreen() {
    console.log(state.screenName);
  }
  return (
    <>
      <HiddenReset onReset={handleReset} />
      <Background colors={[['#99B2DD', '#3A405A'], ['#F9DEC9', '#E9AFA3']]} />
      <div className="body">
        <Weather />
        {renderScreen()}
        <button onClick={() => dispatch({ type: 'SET_SCREEN', payload: screenNames.MAIN_MENU})}>click</button>
      </div>
    </>
  )
}

export default App;