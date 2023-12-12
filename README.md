# Mastermind

## Getting Started

To set up the Mastermind on your local machine, follow these steps:

1. Clone the repository: 

2. Install dependencies:
`npm install`
3. Start the application:
`npm run dev`

4. Open your preferred web browser and go to `http://localhost:3000` to access the application.

To deploy, run 
`npm run deploy`

site is hosted at
https://nataliebenjes.github.io/mastermind2/

# Mastermind Game

Welcome to the Mastermind game, a classic code-breaking game with a multiplayer twist!

## Overview


In this version of Mastermind, there are two players who take turns guessing the secret code. The game consists of 10 rounds, and each player gets 10 attempts to guess the secret code. The player who correctly guesses the code or has the closest guess when the maximum attempts are reached wins the game.



## Game Rules

1. **Players:** Two players take turns guessing the secret code.

2. **Secret Code:** The computer randomly selects a pattern of four different numbers from a total of 8 different numbers, allowing duplicates.

3. **Turns:** Each player has 10 attempts to guess the secret code.

4. **Timer:** A timer of 20 seconds is set for each turn. If a player doesn't make a guess within the time limit, their turn ends.

5. **Scoring:** Players receive feedback after each guess, indicating the correctness of their numbers and their positions.

6. **Winning:** The player who correctly guesses the code or has the closest guess when the maximum attempts are reached wins.

- After each guess, the computer will provide feedback in the form of:
  - Correctly guessed number
  - Correctly guessed number and its correct location
  - Incorrect guess


## User Interface

Users can interact with the game through the provided user interface, which includes:

- Ability to guess combinations of 4 numbers
- View the history of guesses and their feedback
- Display of the number of guesses remaining
- Display of time remaining in guess


### API Integration

The game utilizes the [Random Number Generator API](https://www.random.org/integers) to generate the number combinations. Please follow the recommended parameter values for simplicity:

- Number of integers requested: 4
- The smallest value returned: 0
- The largest value returned: 7
- Number of columns used to display the returned values: 1
- Use base 10 system
- Returns response in plain text
- Generate a new set of random numbers with each request

### Getting Started

1. Clone this repository.
2. Install the required dependencies.
3. Run the game application.
4. Start guessing and crack the code!

Enjoy playing Mastermind! If you have any issues or suggestions, feel free to contribute or open an issue. Good luck!



## Future Improvements

Here are some potential areas for improvement:

- Give user option to select multi player or single player mode
- Fix timer glitch due to state. Possible to incorporate timer hook from react

## Feedback and Support

If you have any feedback, suggestions, or need support, please feel free to reach out via GitHub.



## License
MIT

Copyright (c) 2023 Natalie Benjes

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the “Software”), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
