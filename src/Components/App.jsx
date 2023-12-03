import React, { useState, createContext, useEffect } from "react";
import Header from "./Header";
import Board from "./Board";
import { boardDefault } from "../Numbers";
import "../App.css";
import NumbersSubmit from "./NumbersSubmit";
import NumberCall from "./NumberCall";


export const AppContext = createContext();

export default function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, number: "" });

  // const secretCode = null;
  // Function to generate a random code for the computer
  const generateSecretCode = async () => {
    try {
      const apiResponse = await NumberCall.codeSearch();
      console.log("apiresp", apiResponse);
      // Use the response from the API call as the secret code
      const secretCode = apiResponse.split('').map(Number);
      console.log("secretCode", secretCode);
      return secretCode;
    } catch (error) {
      console.error("Error fetching secret code", error);
      // Handle error if needed
      return null;
    }
  };
  // const generateSecretCode = () => {
  //   const secretCode = [];
  //   for (let i = 0; i < 4; i++) {
  //     // Generate a random number between 0 and 7
  //     const randomNumber = Math.floor(Math.random() * 8);
  //     secretCode.push(randomNumber);
  //   }
  //   return secretCode;
  // };

  const generateNewBoard = (secretCode) => {
    const newBoard = [];
      // Initialize the board with empty arrays
    for (let attempt = 0; attempt < 12; attempt++) {
      newBoard.push([]);
    }
    newBoard[0] = secretCode;
    setBoard(newBoard);
    // console.log("board", board);
  }
  useEffect(() => {
    // Side effect logic to run after currAttempt is updated
    console.log(`On Guess number: ${currAttempt.attempt}, You guessed: ${currAttempt.number}`);
  }, [currAttempt]);
  

  const handleFormSubmission = (userInput) => {
    if (currAttempt.attempt === 0) {
      let secretCode = generateSecretCode();
      generateNewBoard(secretCode);
    }
    // console.log("User input:", userInput);

    if (currAttempt.attempt > 10) {
      console.log("game over");
      return;
    }

    let currNum = userInput;
    for (let i = 0; i < 4; i++) {
      currNum += board[currAttempt.attempt][i];
    }
    let feedback = "";
    const userInputArray = userInput.split("").map((num) => parseInt(num, 10));

    const correctNumberCount = new Set(userInputArray.filter((num) => board[0].includes(num))).size;

    const correctLocationCount = board[0].filter((num, index) => num === userInputArray[index]).length;

    console.log(board[0]);
    if (correctLocationCount === 4) {
      feedback = "You guessed correctly! (Correct Number and Correct Location)";
    } else if (correctLocationCount < 4 && correctLocationCount !== 0) {
      feedback = `You guessed correctly! (${correctLocationCount} correct location(s) & (${correctNumberCount} total correct numbers)`;
    } else {
      feedback = "Incorrect guess";
    }
    console.log(feedback);
    setCurrAttempt((prevAttempt) => ({
      attempt: prevAttempt.attempt + 1,
      number: userInput,
    }));
  };

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