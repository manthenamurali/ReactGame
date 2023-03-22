import "./App.css";
import PlayerBoard from "./components/PlayerBoard";
import Button from "./components/Button";

function App() {
  return (
    <div className="app-bg">
      <div className="boards-container">
        <PlayerBoard
          playername="Player 1"
          playerscore="0"
          isActivePlayer={true}
          isFirstPlayer={true}
        ></PlayerBoard>
        <PlayerBoard
          playername="Player 2"
          playerscore="0"
          isActivePlayer={false}
        ></PlayerBoard>
        <div className="options-container">
          <Button>New Game</Button>
          <div style={{ "margin-top": "auto" }}></div>
          <Button>Roll Dice</Button>
          <div style={{ "margin-top": "1rem" }}></div>
          <Button>Hold</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
