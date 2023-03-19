import "./App.css";
import PlayerBoard from "./components/PlayerBoard";

function App() {
  return (
    <div className="app-bg">
      <div className="boards-continer">
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
      </div>
    </div>
  );
}

export default App;
