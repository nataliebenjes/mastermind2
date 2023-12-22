import PropTypes from "prop-types";
import { Box, TextField } from "@mui/material";
import { useState } from "react";
import React from 'react';
import { shades } from "../../public/theme";


function NumbersSubmit(props) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ensure the user input is a 4-digit number
    if (/^\d{4}$/.test(userInput)) {
      // Pass the user's guess to the parent component
      props.formSubmissionHandler(userInput);
      // Clear the input field after submission
      setUserInput("");
    } else {
      // Handle invalid input (notify the user, disable the submit button, etc.)
      console.log("Invalid input. Please enter a 4-digit number.");
    }
  };

  return (
    <Box>
      <div className="center">
        <div className="submit-section">
          <p>
            <em>Make another guess</em>
          </p>

          <form onSubmit={handleSubmit}>
            <TextField
              type="number"
              name="number"
              label="Enter your four number guess"
              value={userInput}
              onChange={handleChange}
              sx= {{ width: '300px' }}
              />
            <button type="submit"   className="custom-btn" >
              {props.buttonText}
            </button>
          </form>
        </div>
      </div>
    </Box>
  );
}

NumbersSubmit.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default NumbersSubmit;
