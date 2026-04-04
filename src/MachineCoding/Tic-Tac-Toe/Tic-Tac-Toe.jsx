import React, { useState } from "react";
import "./style.scss";

/* ---------------- Square Component ---------------- */

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

/* ---------------- Main Game ---------------- */

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  /* -------- Winner Logic -------- */

  const checkWinner = (board) => {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of patterns) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  /* -------- Handle Click -------- */

  const handleClick = (index) => {
    const temp = [...board];

    // prevent overwrite or play after finish
    if (temp[index] || winner) return;

    temp[index] = currentPlayer;
    setBoard(temp);

    const win = checkWinner(temp);

    if (win) {
      setWinner(win);
    } else if (!temp.includes(null)) {
      setWinner("Draw");
    } else {
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  };

  /* -------- Reset Game -------- */

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  /* -------- Status Message -------- */

  const renderStatus = () => {
    if (winner === "Draw") return "Game Draw!";
    if (winner) return `Winner: ${winner}`;
    return `Current Player: ${currentPlayer}`;
  };

  /* -------- UI -------- */

  return (
    <div className="container">
      <h2 className="status">{renderStatus()}</h2>

      <div className="board">
        {board.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
