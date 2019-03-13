import React, { useState } from 'react';
import Weather from './Weather.js';
import Background from './Background.js';

function App() {
  return (
    <>
      <Background colors={[['#99B2DD', '#3A405A'], ['#F9DEC9', '#E9AFA3']]} />
      <div className="body">
        <h1>Welcome!</h1>
        <Weather />
      </div>
    </>
  )
}

export default App;