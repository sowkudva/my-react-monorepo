import './styles.css'
import Card from './components/Card'
import { useState } from 'react'
import { tasks, statuses } from './util/data'

// https://www.youtube.com/watch?v=gjrVCY3oPds - video tutorila

function App() {
  const [tasksArray, setTaskstasksArray] = useState(tasks)

  const columns = statuses.map((status) => {
    const filteredTasks = tasksArray.filter((task) => task.status === status)

    return {
      title: status,
      tasks: filteredTasks,
    }
  })

  const handleDrop = (e, dropStatus) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('id')
    const task = tasksArray.find((task) => task.id === id)
    console.log('original', tasksArray)
    if (task) {
      updateTask({ ...task, status: dropStatus })
    }
    setTimeout(() => console.log('tasksUpdated', tasksArray), 5000)
  }

  const updateTask = (updatedTask) => {
    const tasksUpdated = tasksArray.map((t) => {
      return t.id === updatedTask.id ? updatedTask : t
    })

    setTaskstasksArray(tasksUpdated)
  }

  return (
    <div className='app'>
      {columns.map((column, idx) => (
        <>
          <div>
            <h3>{column.title}</h3>
            {column.tasks.map((task) => (
              <div
                draggable
                onDrop={(e) => handleDrop(e, task.status)}
                onDragOver={(e) => e.preventDefault()}
                onDragStart={(e) => e.dataTransfer.setData('id', task.id)}
              >
                <Card key={task.id} task={task}></Card>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  )
}

export default App
