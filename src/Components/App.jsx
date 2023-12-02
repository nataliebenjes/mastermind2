import React, { useState, createContext } from "react";
import Header from "./Header";
import Board from "./Board";
import { boardDefault } from "../Numbers";
import "../App.css";
import NumbersSubmit from "./NumbersSubmit";


export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const secretCode = null;
  // Function to generate a random code for the computer
  const generateSecretCode = () => {
    const secretCode = [];
    for (let i = 0; i < 4; i++) {
      // Generate a random number between 0 and 7
      const randomNumber = Math.floor(Math.random() * 8);
      secretCode.push(randomNumber);
    }
    return secretCode;
  };
  const handleFormSubmission = (userInput) => {
    if (secretCode === null) {
      const secretCode = generateSecretCode();
    }

    console.log("User input:", userInput);
    generateNewBoard(userInput);
  };
  generateNewBoard = () => {
    const newBoard = 
    setBoard(newBoard);
  }
  return (
    <div className="App">
      <React.Fragment>
        <AppContext.Provider value={{ board, setBoard }}>
          <Board />
          <Header />
          <NumbersSubmit formSubmissionHandler={handleFormSubmission} buttonText="Submit" />
        </AppContext.Provider>
      </React.Fragment>
    </div>
  );
}

export default App;