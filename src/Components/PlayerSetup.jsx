import React, { useState} from "react";
import PropTypes from "prop-types";


const PlayerSetup = () => {
  const [playerCount, setPlayerCount] = useState(0);
  const handlePlayerCountChange = (event) => {
    setPlayerCount(parseInt(event.target.value, 10));
  };
     
  return (
    <div>
         <label>
           Select the number of players:
           <select value={playerCount} onChange={handlePlayerCountChange}>
             <option value={0}>select no of players</option>
             <option value={1}>1 Player</option>
             <option value={2}>2 Players</option>
           </select>
         </label>
    </div>
  );
};

export default PlayerSetup;

PlayerSetup.propTypes = {
  playerCount: PropTypes.number
}