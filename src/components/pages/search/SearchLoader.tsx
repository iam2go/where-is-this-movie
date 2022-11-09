
import MovieCardLoader from "@blocks/MovieCard/MovieCardLoader";

function SearchLoader() {
  return (
    <>
      {Array.from({ length: 3 }, (_, i) => (
       <MovieCardLoader key={i} />
      ))}
    </>
  );
}

export default SearchLoader;
