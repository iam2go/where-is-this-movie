import { Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDiscoverMovie } from "../../../hooks/quires/useDiscoverMovie";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import MovieCard from "../../blocks/MovieCard";

const options = { threshold: 1.0};
function MovieList() {
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage, isLoading } = useDiscoverMovie();

  const onClick = (movieID: number) => {
    navigate(`/detail/${movieID}`);
  };

  const onIntersect = useCallback(([entry] : IntersectionObserverEntry[]) => {
    if(entry.isIntersecting && hasNextPage){
      fetchNextPage();
    }
  },[fetchNextPage, hasNextPage]);

  const target  = useIntersectionObserver(onIntersect, options);

  return (
    <div>
      {data?.pages[0]?.results?.map((movie) => (
        <Suspense fallback={<></>} key={movie.id}>
          <MovieCard data={movie} onClick={onClick} />
        </Suspense>
      ))}
      {!isLoading && <Observer ref={target} />}
    </div>
  );
}

const Observer = styled.div`
  height: 2rem;
`

export default MovieList;
