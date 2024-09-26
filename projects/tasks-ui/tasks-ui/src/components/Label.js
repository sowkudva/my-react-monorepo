export default function Label({ label }) {
  return (
    <span
      className='label'
      style={{
        backgroundColor: label.color,
        padding: '5px',
        borderRadius: '3px',
        color: 'black',
      }}
    >
      {label.label}
    </span>
  )
}
