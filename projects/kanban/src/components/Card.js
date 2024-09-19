import '../styles.css'

function Card({ task }) {
  return (
    <div className='card'>
      <h3>{task.task}</h3>
      <div className='card-content'>
        <div>{task.id}</div>
        <div>{task.rating}</div>
      </div>
    </div>
  )
}

export default Card
