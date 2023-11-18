import React from 'react';
import './FilterBox.css'; // Import your CSS file for FilterBox styles

const FilterBox = ({ options, selectedOptions, onChange, onApply, onCancel }) => {
  const handleCheckboxChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selectedOption) => selectedOption !== option)
      : [...selectedOptions, option];

    onChange(updatedOptions);
  };

  const handleApplyFilter = () => {
    onApply();
  };

  const handleCancelFilter = () => {
    onCancel();
  };

  return (
    <div className="filter-box">
      {options.map((option) => (
        <div key={option} className="filter-option">
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
        </div>
      ))}
      <div className="filter-buttons">
        <button className="apply-button" onClick={handleApplyFilter}>
          Apply
        </button>
        <button className="cancel-button" onClick={handleCancelFilter}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
