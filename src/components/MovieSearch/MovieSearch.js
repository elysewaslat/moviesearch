import "./MovieSearch.scss";

function MovieSearch() {
    return (
       <div className="moviesearch">
            <div className="moviesearch__title">
                <p>
                    Find your favourite movie using keywords from IMDB Movies database
                </p>
            </div>
            <div className="moviesearch__form">
                <form className="comments__form__container" id="commentForm">
                    <div className="comments__form__container__item comments__form__container__group">
                        <label for="comment">SEARCH BY KEYWORD</label>
                        <input id="comment" name="comment" placeholder="Pick a keyword related to movies" />
                    </div>
                    <div className="comments__form__container__item comments__form__container__button">
                        <button className="comments__form__container__button" id="submitButton" type="submit">SEARCH</button>
                    </div>
                </form>
            </div>
       </div>
    );
}

export default MovieSearch;