import React, { useState } from 'react';

import './App.css';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import MovieList from "./components/MovieList/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const updateMovies = (movieList) => {
    setMovies(movieList);
  };

  return (
    <div className="App">
      <Header></Header>
      <MovieSearch updateMovies={updateMovies} ></MovieSearch>
      <MovieList movies={movies}></MovieList>
      <Footer></Footer>
    </div>
  );
}

export default App;
