import React, { useState } from 'react';
import './App.css';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(Boolean);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const nextBoard = [...board];
    nextBoard[index] = isXNext ? 'X' : 'O';
    
    setBoard(nextBoard);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game-container">
      <div className="status">
        {winner ? `Winner: ${winner}` : isDraw ? "It's a Draw!" : `Player: ${isXNext ? 'X' : 'O'}`}
      </div>

      <div className="board">
        {board.map((value, index) => (
          <button
            key={index}
            className={`square ${value === 'X' ? 'x-player' : value === 'O' ? 'o-player' : ''}`}
            onClick={() => handleClick(index)}
            disabled={Boolean(value || winner)}
          >
            {value}
          </button>
        ))}
      </div>

      <button className="reset-btn" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}