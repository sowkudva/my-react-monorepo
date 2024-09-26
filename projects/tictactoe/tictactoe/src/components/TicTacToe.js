import { useState } from 'react'
import useTicTacToe from '../hooks/useTicTacToe'

export default function TicTacToe() {
  const { board, calculateWinner, handleClick, resetGame, getStatusMsg } =
    useTicTacToe(rows, cols)
  const [rows, setRows] = useState(3)
  const [cols, setCols] = useState(3)
  const handleRows = (e) => {
    setRows(e.target.value)
  }
  const handleCols = (e) => {
    setCols(e.target.value)
  }
  return (
    <div className='game'>
      <div>
        <div>
          <lable>rows:</lable>
          <input placeholder='Eneter rows' onChange={() => handleRows} />
        </div>
        <div>
          <lable>cols:</lable>
          <input placeholder='Eneter rows' onChange={() => handleCols} />
        </div>
        <button onClick={resetGame}>Submit</button>
      </div>

      <div className='status'>
        {getStatusMsg()}
        <button onClick={resetGame}>Reset</button>
      </div>
      <div className='board'>
        {board.map((item, idx) => {
          return (
            <button
              onClick={() => handleClick(idx)}
              className='cell'
              disabled={item !== null}
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}
