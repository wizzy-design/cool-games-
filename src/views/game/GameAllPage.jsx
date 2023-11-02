/* eslint-disable no-undef */
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllGames,
  selectAllGamesStatus,
  selectGamesNextPage,
  selectGamesPrevPage,
} from "../../redux/store/gameSlice";
import { useState, useEffect } from "react";
import { fetchAsyncGames } from "../../redux/utils/gameUtils";
import Title from "../../components/common/Title";
import Preloader from "../../components/common/Preloader";
import GameList from "../../components/game/GameList";
import Pagination from "../../components/common/Pagination";
import {STATUS} from "../../utils/status";

const GameAllPage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);
  const nextPage = useSelector(selectGamesNextPage);
  const prevPage = useSelector(selectGamesPrevPage);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncGames(page));
  }, [page]);

  const pageHandler = (pageValue) => setPage(pageValue);

  return (
    <GameAllPageWrapper>
      <div className="sc-games section">
        <div className="container">
          <Title titleName={{ firstText: "all", secondText: "games" }} />

          {gamesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : games?.length > 0 ? (
            <>
              <GameList games={games} />
              <Pagination
                pageHandler={pageHandler}
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={page}
              />
            </>
          ) : (
            "No games found!"
          )}
        </div>
      </div>
    </GameAllPageWrapper>
  );
};

export default GameAllPage;

const GameAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  .sc-games {
    min-height: 100vh;
    padding-top: 65px;
  }
`;
