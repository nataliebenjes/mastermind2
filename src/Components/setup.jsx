const PlayerSetup = ({ setPlayerCount }) => {
  const handlePlayerCountChange = (event) => {
    setPlayerCount(parseInt(event.target.value, 10));
  };

  const startGame = () => {
    // Add any initialization logic if needed
    setPlayerCount(playerCount);
  };

  return (
    <div>
      <label>
        Select the number of players:
        <select value={playerCount} onChange={handlePlayerCountChange}>
          <option value={1}>1 Player</option>
          <option value={2}>2 Players</option>
        </select>
      </label>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};
