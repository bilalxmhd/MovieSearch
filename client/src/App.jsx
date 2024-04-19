import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css'



const API_URL = 'http://www.omdbapi.com/?apikey=f28f01f2'; 

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearchSubmit = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]); 
    }
  };

  useEffect(()=>{
    handleSearchSubmit("Batman")
  }, []);

  return (
    < div >
      <div className = "app">
      <h1>Movie Scout</h1>
      <SearchBar onSearchSubmit={handleSearchSubmit}  />
      </div>
      <div>
      <MovieList movies={movies} />
      </div>
      </div> 
    
  );
};

export default App;
