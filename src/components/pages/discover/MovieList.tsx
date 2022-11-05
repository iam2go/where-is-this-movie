import { Suspense, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useDiscoverMovie } from "../../../hooks/quires/useDiscoverMovie";
import MovieCard from "../../blocks/MovieCard";

function MovieList() {
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage } = useDiscoverMovie();
  const { ref, inView } = useInView();

  const onClick = (movieID: number) => {
    navigate(`/detail/${movieID}`);
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <div>
      {data?.pages[0]?.results?.map((movie) => (
        <Suspense fallback={<></>} key={movie.id}>
          <MovieCard data={movie} onClick={onClick} />
        </Suspense>
      ))}
      <div ref={ref} />
    </div>
  );
}

export default MovieList;
