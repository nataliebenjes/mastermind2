import React, { useContext } from "react";
import { AppContext } from "./App";

// eslint-disable-next-line react/prop-types
function Number({ numberPos, attemptVal }) {
  const { board } = useContext(AppContext);
  console.log("board", board);
  const number = board[numberPos][attemptVal];
  console.log("number", number);
  return (
    <div className="number">
      {number}Number</div>
  )
}

export default Number