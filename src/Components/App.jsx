import React, { useState, createContext } from "react";
import Header from "./Header";
import Board from "./Board";
import { boardDefault } from "../Numbers";
import Keyboard from "./NumbersSubmit";
import "../App.css";


export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <React.Fragment>
        <AppContext.Provider value={{ board, setBoard }}>
          <Board />
          <Keyboard />
          <Header />
        </AppContext.Provider>
      </React.Fragment>
    </div>
  );
}

export default App;