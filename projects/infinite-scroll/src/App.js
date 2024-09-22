import './App.css'
import { useState, useCallback, useRef, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'

function App() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)

  const controllerRef = useRef(null)
  const observer = useRef(null)

  const handleInputChange = useCallback(
    (e) => {
      setQuery(e.target.value)
    },
    [query]
  )

  const lastElementObserver = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        console.log(entries)
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) {
        observer.current.observe(node)
      }
    },
    [isLoading, hasMore]
  )

  const fetchData = useCallback(async (pageNumber) => {
    try {
      if (controllerRef.current) controllerRef.current.abort()
      controllerRef.current = new AbortController()
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=100?`,
        {
          signal: controllerRef.current.signal,
        }
      )
      const data = await resp.json()
      setData((prevData) => [...prevData, ...data])
      setHasMore(data.length !== 0 && data.at(-1)?.id !== 5000)
    } catch (e) {
      console.log('api error')
    }

    return () => controllerRef.current.abort()
  }, [])

  useEffect(() => {
    const fetchDataApi = async () => {
      setIsLoading(true)
      await fetchData(pageNumber)
      setIsLoading(false)
    }
    fetchDataApi()
  }, [pageNumber])

  return (
    <div className='App'>
      <div className='container'>
        {data.map((row, idx) => {
          if (data.length === idx + 1) {
            return (
              <div className='card' ref={lastElementObserver}>
                <span className='post-number'>{idx + 1}</span>
                <div>{row.title}</div>
              </div>
            )
          } else {
            return (
              <div className='card'>
                <span className='post-number'>{idx + 1}</span>
                <div>{row.title}</div>
              </div>
            )
          }
        })}
        {isLoading && <div className='loader'></div>}
      </div>
    </div>
  )
}

export default App
