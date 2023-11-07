import { useParams } from "react-router-dom";
import styled from "styled-components";

const GameDetailsPage = () => {
  const { gameId } = useParams();
  console.log(gameId);
  return <GameDetailsPageWrapper></GameDetailsPageWrapper>;
};

export default GameDetailsPage;

const GameDetailsPageWrapper = styled.div`
  .sc-details {
    min-height: 100vh;
    padding-top: 65px;
    padding-bottom: 65px;
  }
`;
