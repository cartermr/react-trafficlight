import './App.css';

import { useState } from 'react'
import Lights from './components/Lights'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    if (count === 3) {
      setCount(1)
    } else {
      setCount(count + 1)
    }
  }

  const randomClick = () => {
    let num = Math.floor(Math.random() * (4 - 1) + 1)
    if (num === count) {
      num = Math.floor(Math.random() * (4 - 1) + 1)
    }
    console.log(num)
    setCount(num)
  }

  return (
    <div className='container'>
      <div className='light-body'>
        <Lights count={count} />
      </div>
      <button onClick={handleClick}>Standard</button>
      <button onClick={randomClick}>Random</button>
    </div>
  );
}

export default App;