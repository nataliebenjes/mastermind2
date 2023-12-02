import React, { useContext } from "react";
import { AppContext } from "./App";

// eslint-disable-next-line react/prop-types
function Number({ numberPos, attemptVal }) {
  const { board } = useContext(AppContext);
  const number = board[attemptVal][numberPos];
  return (
    <div className="number">
      {number}Number</div>
  )
}

export default Number