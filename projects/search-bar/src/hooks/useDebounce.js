import { useState, useEffect } from 'react'

export default function useDebounce(input, delay = 500) {
  const [debounceSearch, setDebounceSearch] = useState(input)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceSearch(input)
    }, delay)

    return () => clearTimeout(timeout)
  }, [input, delay])

  return debounceSearch
}
