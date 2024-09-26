import { FaSearch, FaTimes } from 'react-icons/fa'
import './SearchBarComp.css'
import { useState, useEffect } from 'react'
import useDebounce from '../hooks/useDebounce'

function SearchBar({ setResults }) {
  const [input, setInput] = useState('')
  const debouncedInput = useDebounce(input)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await resp.json()
      console.log(data)
      const filtered = data.filter((user) => {
        return (
          user &&
          user.name &&
          user.name.toLowerCase().startsWith(debouncedInput.toLowerCase())
        )
      })
      setResults(filtered)
    }
    fetchData()
  }, [debouncedInput])

  return (
    <div className='input-wrapper'>
      <FaSearch />
      <input
        type='text'
        onChange={handleChange}
        placeholder='Type here'
        value={input}
      />

      <FaTimes onClick={() => setInput('')} style={{ cursor: 'pointer' }} />
    </div>
  )
}

export default SearchBar
