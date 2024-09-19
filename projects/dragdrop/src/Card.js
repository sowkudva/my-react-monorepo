function Card({ item }) {
  return (
    <>
      <span className='detail'>{item.id}</span>
      <span className='detail'>{item.name}</span>
      <span className='detail'>{item.email}</span>
    </>
  )
}

export default Card
