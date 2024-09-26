import users from '../data/users.json'
import { useState } from 'react'

const columns = [
  { label: 'ID', key: 'id' },
  { label: 'Name', key: 'name' },
  { label: 'Age', key: 'age' },
  { label: 'Occupation', key: 'occupation' },
]

const paginateUsers = (users, page, pageSize) => {
  const start = (page - 1) * pageSize
  const end = start + pageSize

  const pageUsers = users.slice(start, end)
  const totalPages = Math.ceil(users.length / pageSize)

  return { pageUsers, totalPages }
}

export default function DataTable() {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  const { pageUsers, totalPages } = paginateUsers(users, page, pageSize)

  return (
    <div className='data-table-container'>
      <table>
        <thead>
          <tr>
            {columns.map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageUsers.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.occupation}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <div className='pagination'>
        <select
          onChange={(e) => {
            setPage(1)
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 15].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
        <div style={{ display: 'flex', gap: '5px' }}>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <span>
            Page {page} of {pageSize}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
