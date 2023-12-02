import React, { useState, createContext } from "react";
import Header from "./Header";
import Board from "./Board";
import { boardDefault } from "../Numbers";
import Keyboard from "./Keyboard";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div>
      <React.Fragment>
        <AppContext.Provider value={{ board, setBoard, }}>
          <Board />
          <Keyboard />
          <Header />
        </AppContext.Provider>
      </React.Fragment>
    </div>
  );
}

export default App;



//syntactic sugar makes it so we don't have to write "React.createElement"

//React.Fragment creates html that isn't wrapped in a div
