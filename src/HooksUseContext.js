import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext();

function Counter() {
  let count = useContext(CountContext)
  return (
    <h2>{count}</h2>
  )
}

function HooksUseContext() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>You have clicked {count} times.</p>
      <button onClick={() => { setCount(count + 1) }}>Click me</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default HooksUseContext



