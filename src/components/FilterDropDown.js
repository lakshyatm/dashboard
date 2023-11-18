import React, { useState } from 'react';
import filterIcon from './download.png';
import FilterBox from './FilterBox';

const FilterDropDown = ({ onSelect }) => {
  const options = ['burner', 'subscription'];
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([]);

  const handleButtonClick = () => {
    setShowFilterBox(!showFilterBox);
  };

  const handleApplyFilter = () => {
    setShowFilterBox(false);
    onSelect(selectedFilterOptions);
  };

  const handleCancelFilter = () => {
    setShowFilterBox(false);
    setSelectedFilterOptions([]);
  };

  return (
    <div className="filter-dropdown">
      <button onClick={handleButtonClick} className="filter-button">
        <img src={filterIcon} alt="Filter Icon" className="filter-icon" />
        Filter
      </button>

      {showFilterBox && (
        <FilterBox
          options={options}
          selectedOptions={selectedFilterOptions}
          onChange={setSelectedFilterOptions}
          onApply={handleApplyFilter}
          onCancel={handleCancelFilter}
        />
      )}
    </div>
  );
};

export default FilterDropDown;
