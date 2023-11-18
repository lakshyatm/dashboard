import React, { useState } from 'react';
import Tabs from './components/Tabs';
import './App.css';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import FilterBox from './components/FilterBox';

const App = () => {
  const [activeTab, setActiveTab] = useState('Your');
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  const handleFilterButtonClick = () => {
    setShowFilterBox(!showFilterBox);
  };

  const handleFilterBoxApply = () => {
    setFilter(selectedFilterOptions.join(', '));
    setShowFilterBox(false);
  };

  const handleFilterBoxCancel = () => {
    setShowFilterBox(false);
  };
  return (
    <div>
      <Tabs activeTab={activeTab} onChange={handleTabChange} />
      <div className="container">
        <SearchBar onSearch={handleSearch} className="search-bar" />
        <button onClick={handleFilterButtonClick} className="search-button">
          Filter
        </button>
        {showFilterBox && (
          <FilterBox
            options={['burner', 'subscription']} // Replace with your actual options
            selectedOptions={selectedFilterOptions}
            onChange={setSelectedFilterOptions}
            onApply={handleFilterBoxApply}
            onCancel={handleFilterBoxCancel}
          />
        )}
      </div>
      <CardList filter={filter} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
