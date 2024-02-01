import "./Movie.scss"; 

function Movie({ movie }) {
    let movieImageUrl = movie.primaryImage ? movie.primaryImage.url : "/movieplaceholder.png";

    if (!movie) {
        return (
            <div>
                Loading movie ...
            </div>
        )
    }
    return (
        <div className="movie">
            <div className="movie__item">
                <div className="movie__item__title">
                    <p>{movie.titleText.text}</p>
                </div>
                <div className="movie__item__image">
                    <img width="226" height="226" src={movieImageUrl} alt={movie.titleText.text} />
                </div>
                <div className="movie__item__releaseyear">
                    <p>{movie.releaseYear.year}</p>
                </div>
            </div>
        </div>
    );
}

export default Movie;