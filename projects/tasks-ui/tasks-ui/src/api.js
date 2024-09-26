import { tasks } from './data/tasks.js'
import { assignees } from './data/assignees.js'
import { labels } from './data/labels.js'

export const fetchTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks)
    }, 1000)
  })
}

export const fetchAssignee = (taskId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const matchingAssignee = assignees.find((assignee) =>
        assignee.taskIds.includes(taskId)
      )

      resolve(matchingAssignee)
    }, 1000)
  })
}

export const fetchLabels = (taskId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const matchedLabels = labels.filter((label) =>
        label.taskIds.includes(taskId)
      )
      resolve(matchedLabels)
    }, 1000)
  })
}
