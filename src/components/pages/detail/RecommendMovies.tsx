import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useRecommendMovies } from "../../../hooks/quires/useRecommendMovies";
import Icons from "../../atoms/icons";
import Poster from "../../atoms/poster";

type Props = {
  id: string;
};

function RecommendMovies({ id }: Props) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const { data } = useRecommendMovies(id, index);
  const onClickRefresh = useCallback(() => {
    if (data && data.totalCount <= index + 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 4);
    }
  }, [data, index]);

  const onClickMovieItem = useCallback(
    (movieID: number) => {
      if (!movieID) return;
      navigate(`/detail/${movieID}`);
    },
    [navigate]
  );

  return (
    <Wrap>
      <h2>비슷한 작품</h2>
      {
        <RefreshButton onClick={onClickRefresh}>
          <Icons type={"refresh"} solid color="#212426" size={14} />
        </RefreshButton>
      }
      <MovieList>
        {data?.list.map((movie) => (
          <MovieItem key={movie.id} onClick={() => onClickMovieItem(movie.id)}>
            <Poster url={movie.poster_path} />
            <h3>{movie.title}</h3>
            <sub>({movie.release_date.split("-")[0]})</sub>
          </MovieItem>
        ))}
        {(!data || data.totalCount === 0) && (
          <EmptyBox>비슷한 작품을 찾을 수 없습니다😢 </EmptyBox>
        )}
      </MovieList>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: fit-content;
  margin: 5rem;
  box-sizing: border-box;
  padding: 0 20rem;
`;

const RefreshButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  display: inline-block;
  background-color: #dedede;
  border-radius: 2.5rem;
  margin-left: 1rem;
  padding: 0.5rem 0;
  &:hover {
    i {
      animation: rotate 1s infinite;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

const MovieList = styled.div`
  display: flex;
  margin: 2rem 0;
`;

const MovieItem = styled.div`
  text-align: center;
  margin: 1rem;
  cursor: pointer;
`;

const EmptyBox = styled.div`
  width: 100%;
  height: 8rem;
  padding-top: 5rem;
  text-align: center;
  font-size: 14px;
`;

export default RecommendMovies;
