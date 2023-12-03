import React, { useState, createContext, useEffect } from "react";
import Header from "./Header";
import { boardDefault } from "../Numbers";
import "../App.css";
import NumbersSubmit from "./NumbersSubmit";
import NumberCall from "./NumberCall";


export const AppContext = createContext();

export default function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ player: 1, attempt: 0, number: "" });
  const [guesses, setGuesses] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [gameOver, setGameOver] = useState(false);
  
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
    if ((currAttempt.attempt + 2) > 10) {
      setGameOver(true);
      console.log("game over");
      return;
    } else {

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
        newFeedback = `Game Complete! Player ${currAttempt.player} guessed correctly! (Correct Number and Correct Location)`;
        setGameOver(true);
      } else if (correctNumberCount > 0) {
        newFeedback = `Player ${currAttempt.player} guessed correctly! (${correctLocationCount} correct location(s) & (${correctNumberCount} total correct numbers)`;
      } else {
        newFeedback = `Player ${currAttempt.player}'s guess was incorrect`;
      }
      setFeedback(newFeedback);

      setGuesses((prevGuesses) => [...prevGuesses, { player: currAttempt.player, attempt: currAttempt.attempt, number: userInput, feedback: newFeedback }]);

      console.log(feedback);
      setCurrAttempt((prevAttempt) => ({
        player: prevAttempt.player === 1 ? 2 : 1,
        attempt: prevAttempt.attempt + (prevAttempt.player === 2 ? 1 : 0),
        number: userInput,
      }));
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <React.Fragment>
        <AppContext.Provider value={{ board, setBoard }}>
          <Header />
          <div>
            <h4>
            This Mastermind game allows you to play against each other. Each player will take turns guessing. The computer will randomly select a pattern of four different numbers from a total of 8 different numbers (allowing duplicates). Your goal is to guess the correct combination within 10 attempts each.
            </h4>
            <h2>Guesses:</h2>
            {gameOver && (
              <React.Fragment>
                <p>Game Over! The secret code is {board[0]}</p>
                <button onClick={handleRefresh}>Play Again</button>
              </React.Fragment>
            )}
            {!gameOver && (
              <React.Fragment>
                <p>Player {currAttempt.player}'s Turn - Guesses Remaining: {10 - currAttempt.attempt}</p>
                <ul>
                  {guesses.map((guess) => (
                    <li key={guess.attempt}>
                    Player {guess.player}, Attempt {guess.attempt + 1}: {guess.number} - {guess.feedback}
                  </li>
                  ))}
                </ul>
                <NumbersSubmit formSubmissionHandler={handleFormSubmission} buttonText="Submit" />
              </React.Fragment>
            )}
          </div>
        </AppContext.Provider>
      </React.Fragment>
    </div>
  );
}