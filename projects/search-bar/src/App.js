import './App.css'
import { useState } from 'react'

import SearchBarComp from './components/SearchBarComp'
import SearchResults from './components/SearchResults'

// https://www.youtube.com/watch?v=sWVgMcz8Q44 -video tutorial
// implement debounce
// add clear feature

function App() {
  const [results, setResults] = useState([])
  return (
    <div className='App'>
      <div className='search-bar-container'>
        <SearchBarComp setResults={setResults} />

        <SearchResults results={results} />
      </div>
    </div>
  )
}

export default App
