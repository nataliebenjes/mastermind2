import React, { useState } from "react";
import Number from "./Number";
import { boardDefault } from "../Numbers";

function Board() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div>
      {" "}
      <div>
        <Number numberPos={0} attemptVal={0} />
        <Number numberPos={1} attemptVal={0} />
        <Number numberPos={2} attemptVal={0} />
        <Number numberPos={3} attemptVal={0} />
      </div>
      <div>
        <Number numberPos={0} attemptVal={1} />
        <Number numberPos={1} attemptVal={1} />
        <Number numberPos={2} attemptVal={1} />
        <Number numberPos={3} attemptVal={1} />
      </div>
      <div>
        <Number numberPos={0} attemptVal={2} />
        <Number numberPos={1} attemptVal={2} />
        <Number numberPos={2} attemptVal={2} />
        <Number numberPos={3} attemptVal={2} />
      </div>
      <div>
        <Number numberPos={0} attemptVal={3} />
        <Number numberPos={1} attemptVal={3} />
        <Number numberPos={2} attemptVal={3} />
        <Number numberPos={3} attemptVal={3} />
      </div>
      <div>
        <Number numberPos={0} attemptVal={4} />
        <Number numberPos={1} attemptVal={4} />
        <Number numberPos={2} attemptVal={4} />
        <Number numberPos={3} attemptVal={4} />
      </div>
    </div>
  );
}

export default Board;