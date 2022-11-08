import MovieCardLoader from "../../blocks/MovieCard/MovieCardLoader";


function MovieLoader() {
    return ( 
        <div style={{width: '68rem'}}>
            {Array.from({ length: 3 }, (_, i) => (
                <MovieCardLoader key={i} />
            ))}
        </div>
     );
}

export default MovieLoader;