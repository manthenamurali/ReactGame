import styled, { css } from "styled-components";
import {
  ACTIVE_PLAYER_BOARD_COLOR,
  INACTIVE_PLAYER_BOARD_COLOR,
  ACTIVE_PLAYER_CURRENT_SCORE_BG_COLOR,
  INACTIVE_PLAYER_CURRENT_SCORE_BG_COLOR,
  ACTIVE_CURRENT_SCORE_COLOR,
  INACTIVE_CURRENT_SCORE_COLOR,
} from "../utils/Constants";

export const BoardContainer = styled.div`
  background: ${(props) =>
    props.isActivePlayer === "true"
      ? ACTIVE_PLAYER_BOARD_COLOR
      : INACTIVE_PLAYER_BOARD_COLOR};
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${(props) =>
    props.isFirstPlayer === "true" ? "8px 0px 0px 8px" : "0px 8px 8px 0px"};
`;

export const PlayerName = styled.p`
  color: #333;
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 5rem;
`;

export const PlayerScore = styled.p`
  color: #c7365f;
  font-size: 5rem;
  margin-top: 2rem;
`;

export const CurrentScoreContainer = styled.div`
  background: ${(props) =>
    props.isActivePlayer === "true"
      ? ACTIVE_PLAYER_CURRENT_SCORE_BG_COLOR
      : INACTIVE_PLAYER_CURRENT_SCORE_BG_COLOR};
  width: 50%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  justify-self: end;
  margin-top: auto;
  margin-bottom: 5rem;
`;

export const CurrentTitle = styled.p`
  color: ${(props) =>
    props.isActivePlayer === "true"
      ? ACTIVE_CURRENT_SCORE_COLOR
      : INACTIVE_CURRENT_SCORE_COLOR};
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
`;

export const CurrentScore = styled.p`
  color: ${(props) =>
    props.isActivePlayer === "true"
      ? ACTIVE_CURRENT_SCORE_COLOR
      : INACTIVE_CURRENT_SCORE_COLOR};
  font-size: 2.5rem;
  margin-top: 0.5rem;
`;
