import './SearchResults.css'

function SearchResults({ results }) {
  const handleClick = (name) => {
    alert(`you clicked ${name}`)
  }
  return (
    <div className='result-wrapper'>
      {results.map((result, id) => {
        return (
          <div className='result-item' onClick={() => handleClick(result.name)}>
            {result.name}
          </div>
        )
      })}
    </div>
  )
}

export default SearchResults
