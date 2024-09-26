import { useState, useEffect } from 'react'
import { fetchTasks } from '../api'
import TaskItem from './TaskItem'

export default function TaskList() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTaskData = async () => {
      const resp = await fetchTasks()
      setTasks(resp)
    }
    fetchTaskData()
  }, [])

  return (
    <ul className='task-list'>
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />
      })}
    </ul>
  )
}
