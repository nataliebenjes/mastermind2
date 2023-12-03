import React, { useState, createContext, useEffect } from "react";
import Header from "./Header";
import { boardDefault } from "../Numbers";
import "../App.css";
import NumbersSubmit from "./NumbersSubmit";
import NumberCall from "./NumberCall";


export const AppContext = createContext();

export default function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, number: "" });
  const [guesses, setGuesses] = useState([]);
  const [feedback, setFeedback] = useState("");
  
  const generateSecretCode = async () => {
    try {
      const apiResponse = await NumberCall.codeSearch();
      const secretCode = apiResponse;
      console.log("secretCode", secretCode);
      return secretCode;
    } catch (error) {
      console.error("Error fetching secret code", error);
      return null;
    }
  };

// needs to be async because NumberCall.codeSearch returns a promise
const generateNewBoard = async () => {
  try {
    const secretCode = await generateSecretCode();
    if (secretCode) {
      const newBoard = [];
      for (let attempt = 0; attempt < 12; attempt++) {
        newBoard.push([]);
      }
      newBoard[0] = secretCode;
      setBoard(newBoard);
    }
  } catch (error) {
    console.error("Error generating new board", error);
  }
};

  // useEffect(() => {
  //   // Side effect logic to run after currAttempt is updated
  //   console.log(`On Guess number: ${currAttempt.attempt}, You guessed: ${currAttempt.number}`);
  // }, [currAttempt]);

  useEffect(() => {
    const fetchSecretCode = async () => {
      const secretCode = await generateSecretCode();
      if (secretCode) {
        const newBoard = [];
        for (let attempt = 0; attempt < 12; attempt++) {
          newBoard.push([]);
        }
        newBoard[0] = secretCode;
        setBoard(newBoard);
      }
    };

    if (currAttempt.attempt === 0) {
      fetchSecretCode();
    }
  }, [currAttempt]);
  

  const handleFormSubmission = async (userInput) => {

    if (currAttempt.attempt > 10) {
      console.log("game over");
      return;
    }

    let currNum = userInput;
    for (let i = 0; i < 4; i++) {
      currNum += board[currAttempt.attempt][i];
    }
    let newFeedback = "";
    const userInputArray = userInput.split("").map((num) => parseInt(num, 10));

    const correctNumberCount = new Set(userInputArray.filter((num) => board[0].includes(num))).size;

    const correctLocationCount = board[0].filter((num, index) => num === userInputArray[index]).length;

    console.log("userInputArray:", userInputArray);
    console.log("board[0]:", board[0]);
    console.log("correctNumberCount:", correctNumberCount);
    console.log("correctLocationCount:", correctLocationCount);

    if (correctLocationCount === 4) {
      newFeedback = "Game Complete! You guessed correctly! (Correct Number and Correct Location)";
    } else if (correctNumberCount > 0) {
      newFeedback = `You guessed correctly! (${correctLocationCount} correct location(s) & (${correctNumberCount} total correct numbers)`;
    } else {
      newFeedback = "Incorrect guess";
    }
    setFeedback(newFeedback);

    setGuesses((prevGuesses) => [...prevGuesses, { attempt: currAttempt.attempt, number: userInput, feedback: newFeedback }]);

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
          {/* <Board /> */}
          <Header />
          <div>
            <h4>This Mastermind game allows you to play against the computer. The computer will randomly select a pattern of four different numbers from a total of 8 different numbers (allowing duplicates). Your goal is to guess the correct combination within 10 attempts.</h4>
            <h2>Guesses:</h2>
            <ul>
              {guesses.map((guess) => (
                <li key={guess.attempt}>
                  Attempt {guess.attempt}: {guess.number} - {guess.feedback}
                </li>
              ))}
            </ul>
          </div>
          <NumbersSubmit formSubmissionHandler={handleFormSubmission} buttonText="Submit" />
        </AppContext.Provider>
      </React.Fragment>
    </div>
  );
}