import Card from './Card.js'
import { useEffect, useState } from 'react'

function App() {
  const [items, setItems] = useState([])
  const fetchUserData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    setItems(data)
  }

  useEffect(() => {
    const savedItems = localStorage.getItem('savedItems')

    if (savedItems) {
      setItems(JSON.parse(savedItems))
    } else {
      fetchUserData()
    }
  }, [])

  const handleDrop = (e, dropIdx) => {
    const idx = e.dataTransfer.getData('itemIndex')
    if (idx !== dropIdx) {
      const itemsCopy = [...items]
      const itemToBeMoved = itemsCopy.splice(idx, 1)[0]
      console.log('itemToBeMoved', itemToBeMoved)
      itemsCopy.splice(dropIdx, 0, itemToBeMoved)
      setItems(itemsCopy)
    }
  }

  const handleDragStart = (e, idx) => {
    e.dataTransfer.setData('itemIndex', idx)
    console.log('set data')
  }

  return (
    <div className='container'>
      {items.map((item, idx) => {
        return (
          <div
            className='list-container'
            draggable
            onDragStart={(e) => handleDragStart(e, idx)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, idx)}
          >
            <Card item={item}></Card>
          </div>
        )
      })}
      <button>Save List</button>
    </div>
  )
}

export default App
