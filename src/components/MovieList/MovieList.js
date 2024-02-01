import "./MovieList.scss";

import Movie from "../Movie/Movie";

function MovieList({ movies }) {
    console.log(movies);
    if (!movies) {
        movies = {
            results: []
        };
        return (
            <div>
                Loading ...
            </div>
        );
    }
    return (
        <div className="movies">
            {movies.results && movies.results.length > 0 ? (
                movies.results.map(movie => (
                    <Movie key={movie.id} movie={movie} />
                ))
            ) : (
                <div className="movies__notfound">
                    <p>
                        No movies found. Try a different keyword.
                    </p>
                </div>
            )}
        </div>
    );
}

export default MovieList;