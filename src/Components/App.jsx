import React, { useState } from "react";
import Header from "./Header";
import "../App.css";
import PlayerSetup from "./PlayerSetup";
import Game from "./Game";

export default function App() {
  const [playerCount, setPlayerCount] = useState(0);

  return (
    <div className="App">
      <Header />
      {playerCount === 0 ? (
        <PlayerSetup setPlayerCount={setPlayerCount} />
      ) : (
        <Game playerCount={playerCount} />
      )}
    </div>
  );
}