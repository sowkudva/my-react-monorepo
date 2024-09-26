import { fetchAssignee, fetchLabels } from '../api'
import Assignee from './Assignee'
import Label from './Label'
import { useState, useEffect } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

export default function TaskItem({ task }) {
  const [labels, setLables] = useState([])
  const [assignee, setassignee] = useState(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const fetchLabelsApi = async () => {
      const data = await fetchLabels(task.id)
      setLables(data)
    }
    fetchLabelsApi()
  }, [task.id])

  useEffect(() => {
    const fetchAssigneeApi = async () => {
      const data = await fetchAssignee(task.id)
      setassignee(data)
    }
    fetchAssigneeApi()
  }, [task.id])

  return (
    <li className='task-item'>
      <div className='task-header'>
        <input type='checkbox' checked={task.isCompleted} disabled />
        <h3 className='task-name'>{task.name}</h3>
        <div className='labels'>
          {labels.map((label, idx) => {
            return <Label key={idx} label={label} />
          })}
        </div>
        <button
          className='toggle-btn'
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>
      <div className='content' hidden={!expanded}>
        {task.description}
        {assignee && <Assignee assignee={assignee} />}
      </div>
    </li>
  )
}
