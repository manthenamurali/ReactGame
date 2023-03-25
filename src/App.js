import "./App.css";
import PlayerBoard from "./components/PlayerBoard";
import { useState } from "react";
import CustomButton from "./components/CustomButton";
import { WIN_SCORE } from "./utils/Constants";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentPlayerCurrentScore, setCurrentPlayerCurrentScore] = useState(0);

  const rollDiceHandler = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    console.log(`${currentPlayer} rolled dice ${randomValue}`);

    if (randomValue == 1) {
      console.log("switching player..");
      setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
      setCurrentPlayerCurrentScore(0);
    } else {
      setCurrentPlayerCurrentScore(currentPlayerCurrentScore + randomValue);
    }
  };

  console.log(`player1Score = ${player1Score} player2Score = ${player2Score}`);
  if (player1Score >= WIN_SCORE) {
    alert("Player 1 won!!!");
  } else if (player2Score >= WIN_SCORE) {
    alert("Player 2 won!!!");
  }

  const holdHandler = () => {
    if (currentPlayer == 0) {
      setPlayer1Score((prevScore) => prevScore + currentPlayerCurrentScore);
    } else {
      setPlayer2Score((prevScore) => prevScore + currentPlayerCurrentScore);
    }

    setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
    setCurrentPlayerCurrentScore(0);
  };

  const newgameHandler = () => {
    setCurrentPlayer(0);
    setCurrentPlayerCurrentScore(0);
    setPlayer1Score(0);
    setPlayer2Score(0);
  };

  return (
    <div className="app-bg">
      <div className="boards-container">
        <PlayerBoard
          playername="Player 1"
          playerscore={player1Score}
          currentscore={currentPlayer === 0 ? currentPlayerCurrentScore : 0}
          isActivePlayer={currentPlayer === 0}
          isFirstPlayer={true}
        ></PlayerBoard>
        <PlayerBoard
          playername="Player 2"
          playerscore={player2Score}
          currentscore={currentPlayer === 1 ? currentPlayerCurrentScore : 0}
          isActivePlayer={currentPlayer === 1}
        ></PlayerBoard>
        <div className="options-container">
          <CustomButton onClick={newgameHandler}>🔄 New game</CustomButton>
          <CustomButton className="btn__roll-dice" onClick={rollDiceHandler}>
            🎲 Roll dice
          </CustomButton>
          <CustomButton onClick={holdHandler} className="btn__hold">
            📥 Hold
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default App;
