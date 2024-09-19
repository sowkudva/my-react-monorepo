import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons' // Import the icon you need
import { faAngleDown } from '@fortawesome/free-solid-svg-icons' // Import the icon you need
import { useState } from 'react'

export default function Accordian({ sections }) {
  const [openOptions, setOpenOptions] = useState(new Set())

  const handleClick = (value) => {
    const newOpenOptions = new Set(openOptions)
    newOpenOptions.has(value)
      ? newOpenOptions.delete(value)
      : newOpenOptions.add(value)
    setOpenOptions(newOpenOptions)
  }
  return (
    <div className='accordian'>
      {sections.map(({ value, title, content }) => {
        const isExpanded = openOptions.has(value)

        return (
          <div className='accordian-item' key={value}>
            <button
              className='accordian-item-title'
              type='button'
              onClick={() => handleClick(value)}
            >
              {title}
              <span className='accordian-icon'>
                <FontAwesomeIcon icon={isExpanded ? faAngleDown : faAngleUp} />
              </span>
            </button>
            <div className='accordian-content' hidden={!isExpanded}>
              {content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
