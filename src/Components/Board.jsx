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
      <div>
        <Number numberPos={0} attemptVal={5} />
        <Number numberPos={1} attemptVal={5} />
        <Number numberPos={2} attemptVal={5} />
        <Number numberPos={3} attemptVal={5} />
      </div>
      <div>
        <Number numberPos={0} attemptVal={6} />
        <Number numberPos={1} attemptVal={6} />
        <Number numberPos={2} attemptVal={6} />
        <Number numberPos={3} attemptVal={6} />
      </div>
      <div>
        <Number numberPos={0} attemptVal={7} />
        <Number numberPos={1} attemptVal={7} />
        <Number numberPos={2} attemptVal={7} />
        <Number numberPos={3} attemptVal={7} />
      </div>
      <div>
        <Number numberPos={0} attemptVal={8} />
        <Number numberPos={1} attemptVal={8} />
        <Number numberPos={2} attemptVal={8} />
        <Number numberPos={3} attemptVal={8} />
      </div>
      <div>
        <Number numberPos={0} attemptVal={9} />
        <Number numberPos={1} attemptVal={9} />
        <Number numberPos={2} attemptVal={9} />
        <Number numberPos={3} attemptVal={9} />
      </div>
    </div>
  );
}

export default Board;