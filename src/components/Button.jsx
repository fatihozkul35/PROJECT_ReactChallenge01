import React from "react";

const Button = ({ onClick, destination }) => {
  return (
    <li>
      <button onClick={onClick}>{destination}</button>
    </li>
  );
};

export default Button;
