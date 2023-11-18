import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS file for SearchBar styles

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Trigger the search callback only if a search term is provided
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by card name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
