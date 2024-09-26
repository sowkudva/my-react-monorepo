import { useState } from 'react'

const initialBoard = () => Array(rows * cols).fill(null)
const useTicTacToe = ({ rows, cols }) => {
  const [board, setBoard] = useState(initialBoard)
  const [isXnext, setIsXNext] = useState(true)
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i]
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      )
        return currentBoard[a]
    }
    return null
  }
  const handleClick = (idx) => {
    const winner = calculateWinner(board)
    if (winner || board[idx]) return

    const newBoard = [...board]
    console.log(newBoard)
    newBoard[idx] = isXnext ? 'x' : 'o'
    setBoard(newBoard)
    setIsXNext((prev) => !prev)
  }

  const getStatusMsg = () => {
    const winner = calculateWinner(board)
    if (winner) return `Player ${winner} wins`
    if (!board.includes(null)) return `Its a draw`
    return `Player ${isXnext ? 'X' : 'O'}'s turn`
  }

  const resetGame = () => {
    setBoard(initialBoard())
    setIsXNext(true)
  }

  return { board, handleClick, getStatusMsg, resetGame }
}

export default useTicTacToe
