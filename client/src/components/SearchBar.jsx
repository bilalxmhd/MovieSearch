import React, { useState, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchTerm); 
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        placeholder="Search movies"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit" ><FiSearch className="icon"/></button>
    </form>
  );
};

export default SearchBar;