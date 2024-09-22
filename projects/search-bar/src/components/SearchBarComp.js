import { FaSearch } from 'react-icons/fa'
import './SearchBarComp.css'
import { useState } from 'react'

function SearchBar({ setResults }) {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
    fetchData(input)
  }

  const fetchData = async (value) => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data)
    const filtered = data.filter((user) => {
      return user && user.name && user.name.toLowerCase().startsWith(value)
    })

    setResults(filtered)
  }

  return (
    <div className='input-wrapper'>
      <FaSearch />
      <input
        type='text'
        onChange={handleChange}
        placeholder='Type here'
        values={input}
      />
    </div>
  )
}

export default SearchBar
