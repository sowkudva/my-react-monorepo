import ProgressBar from './components/ProgressBar.js'
import { useState, useEffect, useRef } from 'react'

//question taken from jsCafe -> https://www.jscafe.dev/sandbox/progress-bar-react-js

const totalMs = 15 * 1000
const interval = 1 * 1000

const progressMade = (interval / totalMs) * 100
const totalCycles = totalMs / interval

function App() {
  const [progress, setProgress] = useState(0)
  const timer = useRef(null)
  const cycles = useRef(0)

  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((prev) => prev + progressMade)
      cycles.current += 1

      if (cycles.current === totalCycles) clearInterval(timer.current)
    }, interval)

    return () => {
      clearInterval(timer.current)
    }
  }, [])
  return (
    <div className='App'>
      <ProgressBar progressMade={progress} />
    </div>
  )
}

export default App
