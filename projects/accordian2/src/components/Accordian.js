import { useState, useEffect } from 'react'

function Accordian({ questions, allowMultiple }) {
  const [openItems, setOpenItems] = useState(new Set())

  useEffect(() => {
    setOpenItems(new Set())
  }, [allowMultiple])

  const handleClick = (id) => {
    const newOpenItems = new Set(openItems)
    newOpenItems.has(id) ? newOpenItems.delete(id) : newOpenItems.add(id)
    if (!allowMultiple) {
      setOpenItems(openItems.has(id) ? new Set() : new Set([id]))
    } else {
      setOpenItems(newOpenItems)
    }
  }
  return (
    <div className='accordian'>
      {questions.map(({ id, title, info }) => {
        const isExpanded = openItems.has(id)
        return (
          <div key={id} className='accordian-item'>
            <div className='title-btn'>
              <h4>{title}</h4>
              <button onClick={() => handleClick(id)}>
                {isExpanded ? '-' : '+'}
              </button>
            </div>
            {isExpanded && <div>{info}</div>}
          </div>
        )
      })}
    </div>
  )
}

export default Accordian
