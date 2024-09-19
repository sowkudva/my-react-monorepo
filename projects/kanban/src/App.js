import './styles.css'
import Card from './components/Card'
import { tasks, statuses } from './util/data'

// https://www.youtube.com/watch?v=gjrVCY3oPds - video tutorila

function App() {
  //const todoTasks = tasks.filter((task) => task.status === 'todo')
  // const progressTasks = tasks.filter((task) => task.status === 'inprogress')
  // const doneTasks = tasks.filter((task) => task.status === 'done')
  const columns = statuses.map((status) => {
    const filteredTasks = tasks.filter((task) => task.status === status)

    return {
      title: status,
      tasks: filteredTasks,
    }
  })
  const handleDrop = (e, title) => {
    e.preventDefault()
    const id = e.dataTRansfer.getData('id')
    const task = tasks.find((task) => task.id === id)
    console.log(task)
  }
  return (
    <div className='app'>
      {columns.map((column, idx) => (
        <>
          <div
            draggable
            onDrop={(e) => handleDrop(e, 'todo')}
            onDragOver={(e) => e.preventDefault}
          >
            <h3>{column.title}</h3>
            {column.tasks.map((task) => (
              <Card
                onDragStart={(e) => e.dataTransfer.setData('id', task.id)}
                key={task.id}
                task={task}
              ></Card>
            ))}
          </div>
        </>
      ))}
    </div>
  )
}

export default App
