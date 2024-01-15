import React from 'react';
import useStorage from './Storage';

function App() {

  const [input, setInput] = useStorage('inputValue');


  return (

    <input onChange={e => setInput(e.target.value)} value={input}  type="text"  />

    )
}

export default App
