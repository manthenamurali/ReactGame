import {
  BoardContainer,
  PlayerName,
  PlayerScore,
  CurrentScoreContainer,
  CurrentTitle,
  CurrentScore,
} from "./PlayerBoardStyles";

function PlayerBoard(props) {
  const isActivePlayer = `${props.isActivePlayer}`;
  const isFirstPlayer = `${props.isFirstPlayer}`;
  return (
    <BoardContainer
      isActivePlayer={isActivePlayer}
      isFirstPlayer={isFirstPlayer}
    >
      <PlayerName isActivePlayer={isActivePlayer}>
        {props.playername}
      </PlayerName>
      <PlayerScore isActivePlayer={isActivePlayer}>
        {props.playerscore}
      </PlayerScore>
      <CurrentScoreContainer isActivePlayer={isActivePlayer}>
        <CurrentTitle isActivePlayer={isActivePlayer}>Current</CurrentTitle>
        <CurrentScore isActivePlayer={isActivePlayer}>
          {props.currentscore}
        </CurrentScore>
      </CurrentScoreContainer>
    </BoardContainer>
  );
}

export default PlayerBoard;
