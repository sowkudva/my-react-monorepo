import useOnline from '../hooks/useOnline'

function HomePage() {
  const isOnline = useOnline(4000)
  return (
    <>
      <p>Hello from homepage</p>
      {isOnline && <p style={{ color: 'green' }}>User is online</p>}
      {!isOnline && <p style={{ color: 'red' }}>User is offline</p>}
    </>
  )
}

export default HomePage
