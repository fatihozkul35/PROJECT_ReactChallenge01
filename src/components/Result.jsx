import React from "react";
import Button from "./Button";
import Container from "./Container";

const Result = ({ winner, xIsNext, jumpTo, history }) => {
  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move#${move}` : `Go to start`;
      return (
        <Button
          key={move}
          onClick={() => jumpTo(move)}
          destination={destination}
        />
      );
    });
  return (
    <Container>
      <p>
        {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
      </p>
      {renderMoves()}
    </Container>
  );
};

export default Result;
