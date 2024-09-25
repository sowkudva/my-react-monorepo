import { useState, useEffect } from 'react'

export default function useOnline(interval) {
  const [isOnline, setOnline] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOnline(true)
    }, interval)
  })

  return isOnline
}
