// Game.js
import React, { useState, useEffect } from "react";
import NumbersSubmit from "./NumbersSubmit";
import { boardDefault } from "../Numbers";
import NumberCall from "./NumberCall";
import PropTypes from "prop-types";


const Game = ({ playerCount }) => {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ player: 1, attempt: 0, number: "" });
  const [guesses, setGuesses] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [gameOn, setGameOn] = useState(false);

  const startGame = async () => {
    setGameOn(true);
    const secretCode = await generateSecretCode(); // Await the result of generateSecretCode
    if (secretCode) {
      const newBoard = [];
      for (let attempt = 0; attempt < 12; attempt++) {
        newBoard.push([]);
      }
      newBoard[0] = secretCode;
      setBoard(newBoard);
    }
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

  const handleFormSubmission = async (userInput) => {
    if (gameOn === false){
      setGameOn(true);
      startGame();
    }
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
        //break up guessed number
        const userInputArray = userInput.split("").map((num) => parseInt(num, 10));

        const secretCodeOccurrences = {};
        const userInputOccurrences = {};

        // Count occurrences of each number in inputted array and secretCodeArray (board[0])
        for (const num of board[0]) {
            secretCodeOccurrences[num] = (secretCodeOccurrences[num] || 0) + 1;
        }
        for (const num of userInputArray) {
            userInputOccurrences[num] = (userInputOccurrences[num] || 0) + 1;
        }

        let totalCorrectNumbers = 0;

        for (const num of Object.keys(userInputOccurrences)) {
            // Check if the number is present in both arrays
            if (secretCodeOccurrences[num]) {
              //return occurances overlap num
              const minOccurrences = userInputOccurrences[num] < secretCodeOccurrences[num]
                  ? userInputOccurrences[num]
                  : secretCodeOccurrences[num];
      
              totalCorrectNumbers += minOccurrences;
          }
        }

        const correctLocationCount = board[0].filter((num, index) => num === userInputArray[index]).length;

        console.log("userInputArray:", userInputArray);
        console.log("board[0]:", board[0]);

        if (correctLocationCount === 4) {
          newFeedback = `Player ${currAttempt.player} guessed correctly! (Correct Number and Correct Location)`;
          setGameOver(true);
        } else if (totalCorrectNumbers > 0) {
          newFeedback = `Player ${currAttempt.player} guessed correctly! (${correctLocationCount} correct location(s) & (${totalCorrectNumbers} total correct numbers)`;
        } else {
          newFeedback = `Player ${currAttempt.player}'s guess was incorrect`;
        }
        setFeedback(newFeedback);

        console.log(feedback);
        //change to accomodate 1 player
        if (playerCount === 1){
        setGuesses((prevGuesses) => [...prevGuesses, { attempt: currAttempt.attempt, number: userInput, feedback: newFeedback }]);
        setCurrAttempt((prevAttempt) => ({
          attempt: prevAttempt.attempt + 1,
          number: userInput,
        }));
        } else {
          setGuesses((prevGuesses) => [...prevGuesses, { player: currAttempt.player, attempt: currAttempt.attempt, number: userInput, feedback: newFeedback }]);
          setCurrAttempt((prevAttempt) => ({
            player: prevAttempt.player === 1 ? 2 : 1,
            attempt: prevAttempt.attempt + (prevAttempt.player === 2 ? 1 : 0),
            number: userInput,
          }));
      }
    }
  }
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
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
            {/* {timeLeft > 0 &&
              <p>You have: {timeLeft} seconds remaining!</p>
            } */}
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
    )
}
Game.propTypes = {
  playerCount: PropTypes.number.isRequired
}
export default Game;
