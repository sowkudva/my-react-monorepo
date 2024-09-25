import useOnline from '../hooks/useOnline'

export default function ChatPage() {
  const isOnline = useOnline(2000)
  return (
    <div>
      <p>{isOnline ? 'Avaibale for chat' : 'Offline for chat'}</p>
    </div>
  )
}
