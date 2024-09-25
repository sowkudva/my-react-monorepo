function ProgressBar({ progressMade }) {
  return (
    <div className='progress-bar-wrapper'>
      <div
        className='progress-bar'
        style={{ transform: `translateX(${progressMade - 100}%)` }}
      ></div>
    </div>
  )
}

export default ProgressBar
