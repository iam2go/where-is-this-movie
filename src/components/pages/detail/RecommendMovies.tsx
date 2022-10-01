import { useCallback, useState } from "react";
import styled from "styled-components";
import { useRecommendMovies } from "../../../hooks/quires/useRecommendMovies";
import Icons from "../../atoms/icons";
import Poster from "../../atoms/poster";

type Props = {
  id: string;
};

function RecommendMovies({ id }: Props) {
  const [index, setIndex] = useState(0);
  const { data } = useRecommendMovies(id, index);
  const onClick = useCallback(() => {
    if (data && data.totalCount <= index + 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 4);
    }
  }, [data, index]);

  return (
    <Wrap>
      <h2>비슷한 작품</h2>
      {
        <RefreshButton onClick={onClick}>
          <Icons type={"refresh"} solid color="#212426" size={14} />
        </RefreshButton>
      }
      <MovieList>
        {data?.list.map((movie) => (
          <MovieItem key={movie.id}>
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
`;

const MovieList = styled.div`
  display: flex;
  margin: 2rem 0;
`;

const MovieItem = styled.div`
  text-align: center;
  margin: 1rem;
`;

const EmptyBox = styled.div`
  width: 100%;
  height: 8rem;
  padding-top: 5rem;
  text-align: center;
  font-size: 14px;
`;

export default RecommendMovies;
