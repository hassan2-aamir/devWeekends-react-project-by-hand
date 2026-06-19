import { useState } from 'react'
import './App.css'
import Counter from './components'

function App() {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount((prev)=>prev+1)
  }
  const subtract = () => {
    if (count > 0) {
      setCount((prev)=>prev-1)
    }
    
  }

  return (
    <>
      <Counter
        count={count}
        add={add}
        subtract={subtract}
      />
    </>
  )
}

export default App
