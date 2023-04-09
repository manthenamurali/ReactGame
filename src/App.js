import "./App.css";
import PlayerBoard from "./components/PlayerBoard";
import { useState } from "react";
import CustomButton from "./components/CustomButton";
import { WIN_SCORE } from "./utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "./store";
import styled, { ThemeProvider } from "styled-components";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentPlayerCurrentScore, setCurrentPlayerCurrentScore] = useState(0);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.app.theme);
  console.log("selector = " + selector);

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

  const toggleTheme = () => {
    console.log("Toggle theme...");
    dispatch(appActions.toogleTheme());
  };

  const darkTheme = {
    bg: "#ffffff",
  };

  const lightTheme = {
    bg: "#000000",
  };

  const theme = selector === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <AppBG>
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
        <CustomButton onClick={toggleTheme} className="toggle-theme">
          Toggle Theme
        </CustomButton>
      </AppBG>
    </ThemeProvider>
  );
}

const AppBG = styled.div`
  background-image: ${(props) => props.theme.bg};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
