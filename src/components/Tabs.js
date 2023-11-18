import React from 'react';
import './Tabs.css';
const Tabs = ({ activeTab, onChange }) => {
  const tabs = ['Your', 'All', 'Blocked'];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? 'active' : ''}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
