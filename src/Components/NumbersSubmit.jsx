import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton, TextField } from "@mui/material";
import { useState } from "react";

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
        <div className="card">
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
              sx={{ width: '300px', fontSize: '14px' }}            />
            <IconButton type="submit" variant="contained" color="primary">
              {props.buttonText}
              <AddIcon />
            </IconButton>
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
