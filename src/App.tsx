import React, { useState } from 'react'
import Counter from './Counter'
import AppCtx from './Context'

export function App() {
  const [total, setTotal] = useState(0)

  return (
    <AppCtx.Provider value={{ total, setTotal }}>
      <div className="App">
        <Counter />
        <button type="button" onClick={() => setTotal(total + 1)}>
          Somar pelo App
        </button>
      </div>
    </AppCtx.Provider>
  )
}
