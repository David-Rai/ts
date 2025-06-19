import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState<number>(0)

  //increment
  const incre = (): void => {
    setCount(prev => prev + 1)
  }

  //decrement
  const decre=():void =>{
    setCount(prev => prev - 1)
  }
  return (
    <main>
      <p>{count}</p>
      <button onClick={incre}>increment</button>
      <button onClick={decre}>decrement</button>
    </main>
  )
}

export default App