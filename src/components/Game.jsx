import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../utils/helpers";
import Result from "./Result";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <Result
        winner={winner}
        xIsNext={xIsNext}
        history={history}
        jumpTo={jumpTo}
      />
    </>
  );
};

export default Game;
