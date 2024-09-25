import './App.css'
import { useState } from 'react'
import questions from './data.js'
import Accordian from './components/Accordian.js'

// from mini projects

function App() {
  const [allowed, setAllowed] = useState(false)
  return (
    <div className='App'>
      <div className='header'>
        <h3> is multiple open accordian allowed</h3>
        <input
          type='checkbox'
          checked={allowed}
          onChange={() => setAllowed((prev) => !prev)}
        />
      </div>
      <div>
        <Accordian questions={questions} allowMultiple={allowed} />
      </div>
    </div>
  )
}

export default App
