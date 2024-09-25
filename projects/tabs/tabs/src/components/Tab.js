import { useState } from 'react'

export default function Tab({ items }) {
  const [clicked, setClicked] = useState('')
  return (
    <div className='tabs'>
      <div className='tab-list'>
        {items.map((item, idx) => {
          const { value, label } = item
          return (
            <button
              key={idx}
              onClick={() => setClicked(value)}
              className={['tab', clicked === value && 'active']
                .filter(Boolean)
                .join(' ')}
            >
              {label}
            </button>
          )
        })}
      </div>

      <div>
        {items.map((item, idx) => {
          const { value, text } = item
          return clicked === value && <p key={idx}>{item.text}</p>
        })}
      </div>
    </div>
  )
}
