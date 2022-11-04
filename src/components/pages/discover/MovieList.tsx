import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useDiscoverMovie } from "../../../hooks/quires/useDiscoverMovie";
import MovieCard from "../../blocks/MovieCard";

function MovieList() {
    const navigate = useNavigate();
    const {data} = useDiscoverMovie();
    const onClick = (movieID: number) => {
        navigate(`/detail/${movieID}`);
      };

    return ( <div>
     {data?.results?.map((movie) => (
        <Suspense fallback={<></>} key={movie.id}>
          <MovieCard data={movie} onClick={onClick}/>
        </Suspense>
      ))}
    </div> );
}

export default MovieList;