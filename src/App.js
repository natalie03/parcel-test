import React, { useReducer, useState } from 'react';
import { ActiveScreen, Weather, Background, MainMenu } from './components';
import { HiddenReset } from 'bli-util-react';

function App() {
  function handleReset() {
    console.log("reset")
  }
  return (
    <>
      <HiddenReset onReset={handleReset} />
      <Background colors={[['#99B2DD', '#3A405A'], ['#F9DEC9', '#E9AFA3']]} />
      <div className="body">
        <Weather />
        <ActiveScreen />
      </div>
    </>
  )
}

export default App;