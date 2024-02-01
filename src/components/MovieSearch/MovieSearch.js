import React from 'react';
import axios from 'axios';

import "./MovieSearch.scss";

function MovieSearch({ updateMovies }) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const keyword = event.target.elements.comment.value;

        console.log('keyword is: ' + keyword);

        const options = {
            method: 'GET',
            url: `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${keyword}`,
            headers: {
              'X-RapidAPI-Key': '582bdc63a6mshc0dd6c1871ca800p19a4bcjsnb0cad48cc043',
              'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            updateMovies(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
       <div className="moviesearch">
            <div className="moviesearch__title">
                <p>
                    Find your favourite movie using keywords from IMDB Movies database
                </p>
            </div>
            <div className="moviesearch__form">
                <form className="moviesearch__form__container" id="commentForm" onSubmit={handleSubmit}>
                    <div className="moviesearch__form__container__item moviesearch__form__container__group">
                        <label for="comment">SEARCH BY KEYWORD</label>
                        <input id="comment" name="comment" placeholder="Pick a keyword related to movies" />
                    </div>
                    <div className="moviesearch__form__container__item moviesearch__form__container__button">
                        <button className="moviesearch__form__container__button" id="submitButton" type="submit">SEARCH</button>
                    </div>
                </form>
            </div>
       </div>
    );
}

export default MovieSearch;