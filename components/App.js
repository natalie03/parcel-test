import React, { useState } from 'react';

import './index.scss';

function App() {
  const [name, setName] = useState('Jeff');
  return (
    <p> Hello, {name}</p>
  )
}

export default App;