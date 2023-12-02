import React from "react";
import Header from "./Header";
import Board from "./Board";
import Keyboard from "./Keyboard";


function App() {
  return (
    <div>
    <React.Fragment>
      <Board />
      <Keyboard />
      <Header />
    </React.Fragment>
    </div>

  );
}

export default App;



//syntactic sugar makes it so we don't have to write "React.createElement"

//React.Fragment creates html that isn't wrapped in a div
