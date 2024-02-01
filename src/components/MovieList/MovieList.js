import "./MovieList.scss";

import Movie from "../Movie/Movie";

import moviesData from "../../testdata/movies.json"

function MovieList() {
    console.log(moviesData)
    if (!moviesData) {
        return (
            <div>
                Loading ...
            </div>
        )
    }
    return (
        <div className="movies">
            {moviesData.results.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;