import { useState } from 'react'
import FileList from './FileList'

export default function FileObject({ file, level }) {
  const { name, children } = file
  const isDirectory = Boolean(children)
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <li>
      <button
        className={['file-item-btn', isDirectory && 'file-item-btn-dir']
          .filter(Boolean)
          .join(' ')}
        onClick={() => {
          if (!isDirectory) return
          setIsExpanded((prev) => !prev)
        }}
      >
        <span>{name}</span>
        {isDirectory && <>[{isExpanded ? '-' : '+'}]</>}
      </button>
      {children && children.length > 0 && isExpanded && (
        <FileList fileList={children} level={level + 1}></FileList>
      )}
    </li>
  )
}
