# Mastermind

## Getting Started

To set up the Mastermind on your local machine, follow these steps:

1. Clone the repository: 

2. Install dependencies:
`npm install`
3. Start the application:
`npm run dev`

4. Open your preferred web browser and go to `http://localhost:3000` to access the application.

# Mastermind Game

Welcome to the Mastermind game! Can you crack the code?

## Overview

This Mastermind game allows you to play against the computer. The computer will randomly select a pattern of four different numbers from a total of 8 different numbers (allowing duplicates). Your goal is to guess the correct combination within 10 attempts.

## Game Rules

- The computer will randomly select a pattern of four different numbers at the start of the game.
- You have 10 attempts to guess the number combinations.
- After each guess, the computer will provide feedback in the form of:
  - Correctly guessed number
  - Correctly guessed number and its correct location
  - Incorrect guess


## User Interface

You can interact with the game through the provided user interface, which includes:

- Ability to guess combinations of 4 numbers
- View the history of guesses and their feedback
- Display of the number of guesses remaining

## Implementation

You are free to choose the programming languages, tools, frameworks, and libraries you find appropriate within reason. The only restriction is not to use a game framework that implements Mastermind.

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

- Header currently cut off when multiple teas added
- Adding user authentication for secure access.
- Enhancing the UI for a more user-friendly experience.

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

**Happy Brewing!** 🍵
