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
  const [timeLeft, setTimeLeft] = useState(20);
  const [timerInterval, setTimerInterval] = useState(null);

  const updateTimer = () => { 
    setTimeLeft((prevTimeLeft) => {
      const newTime = prevTimeLeft - 1;
      if (newTime <= 0) {
        clearInterval(timerInterval);
        switchPlayer();
      }
      return newTime;
    });
  };
  
  const switchPlayer = () => {
    setCurrAttempt((prevAttempt) => ({
      player: prevAttempt.player === 1 ? 2 : 1,
      attempt: prevAttempt.attempt + (prevAttempt.player === 2 ? 1 : 0),
      number: "",
    }));
    setTimeLeft(20); 
  };
  
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

  useEffect(() => {
    setTimerInterval(
      setInterval(() => {
        updateTimer();
      }, 1000)
    );
    // needs to be async because NumberCall.codeSearch returns a promise
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
    return () => {
      clearInterval(timerInterval);
    };
    }, [currAttempt]);
  
  const handleFormSubmission = async (userInput) => {
    if ((currAttempt.attempt + 2) > 10) {
      setGameOver(true);
      setFeedback("You have run out of attempts");
      console.log("game over");
      } else {
        let currNum = userInput;
        for (let i = 0; i < 4; i++) {
          currNum += board[currAttempt.attempt][i];
        }

        let newFeedback = "";

        const userInputArray = userInput.split("").map((num) => parseInt(num, 10));
        //.includes checks, .filter keeps, Set stores, .size gives count
        const correctNumberCount = new Set(userInputArray.filter((num) => board[0].includes(num))).size;

        const correctLocationCount = board[0].filter((num, index) => num === userInputArray[index]).length;

        console.log("userInputArray:", userInputArray);
        console.log("board[0]:", board[0]);
        console.log("correctNumberCount:", correctNumberCount);
        console.log("correctLocationCount:", correctLocationCount);

        if (correctLocationCount === 4) {
          newFeedback = `Player ${currAttempt.player} guessed correctly! (Correct Number and Correct Location)`;
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
    }
  

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <React.Fragment>
        <AppContext.Provider value={{ board, setBoard }}>
          <Header />
          <div className="game-container">
            <h4>
              This Mastermind game allows you to play against each other. Each player will take turns guessing. The computer will randomly select a pattern of four different numbers from a total of 8 different numbers (allowing duplicates). Your goal is to guess the correct combination within 10 attempts each.
            </h4>
            <h2>Guesses:</h2>
            {gameOver && (
              <React.Fragment>
                <p>Game Over! The secret code is {board[0]}</p>
                <p>{feedback}</p>
                <button onClick={handleRefresh}>Play Again</button>
              </React.Fragment>
            )}
            {!gameOver && (
              <React.Fragment>
                <h2>Player {currAttempt.player}'s Turn - Guesses Remaining: {10 - currAttempt.attempt}</h2>
                {timeLeft > 0 &&
                  <p>You have: {timeLeft} seconds remaining!</p>
                }
                <div className="guesses-container">
                  <div className="player-feedback">
                    <h3>Player 1's Feedback</h3>
                    <ul>
                      {guesses
                        .filter((guess) => guess.player === 1)
                        .map((guess) => (
                          <li key={guess.attempt}>
                            Attempt {guess.attempt + 1}: {guess.number} - {guess.feedback}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="player-feedback">
                    <h3>Player 2's Feedback</h3>
                    <ul>
                      {guesses
                        .filter((guess) => guess.player === 2)
                        .map((guess) => (
                          <li key={guess.attempt}>
                            Attempt {guess.attempt + 1}: {guess.number} - {guess.feedback}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <NumbersSubmit formSubmissionHandler={handleFormSubmission} buttonText="Submit guess" />
              </React.Fragment>
            )}
          </div>
        </AppContext.Provider>
      </React.Fragment>
    </div>
  );
}