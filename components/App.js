import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('Jeff');
  return (
    <p> Hello, {name}</p>
  )
}

export default App;