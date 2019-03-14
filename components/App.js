import React, { useState } from 'react';
import Weather from './Weather.js';
import Background from './Background.js';
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
        <h1>Welcome!</h1>
        <Weather />
      </div>
    </>
  )
}

export default App;