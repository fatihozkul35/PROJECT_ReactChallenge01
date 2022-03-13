import React from "react";
const style = {
  width: "200px",
  margin: "20px auto",
};
const Container = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Container;
