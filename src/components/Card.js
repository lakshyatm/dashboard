import React from 'react';
import './Card.css'; // Import your CSS file for styling

const highlightText = (text, searchTerm) => {
  if (!searchTerm) {
    return text;
  }

  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
  return (
    <span>
      {parts.map((part, index) => (
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          <span key={index}>{part}</span>
        )
      ))}
    </span>
  );
};

const Card = ({ card, searchTerm }) => {
  const { name, card_type, expiry, limit, spent, available_to_spend, status } = card;
  const limitPercentage = (card.spent.value / card.limit) * 100;

  return (
    <div className={`card ${card_type === 'burner' ? 'burner-card' : 'subscription-card'}`}>
      <div className="card-body">
        <h1>{highlightText(name, searchTerm)}</h1>
        <h2>Memberfive Budget</h2>
        <div className="card-details-row">
          <div className="card-detail">
            <p className="detail-label">Amount:</p>
            <p className="detail-value">{spent.value} {spent.currency}</p>
          </div>
          <div className="card-detail">
            <p className="detail-label">Frequency:</p>
            <p className="detail-value">Monthly</p>
          </div>
          <div className="card-detail">
            <p className="detail-label">Expiry:</p>
            <p className="detail-value">{expiry}</p>
          </div>
        </div>
        {card_type === 'burner' ? (
          <div>
            <p>Limit: {limit}</p>
            <div className="limit-bar">
              <div className="limit-progress" style={{ width: `${limitPercentage}%` }}></div>
            </div>
          </div>
        ) : <div>
        <p>Limit: {limit}</p>
        <div className="limit-bar">
          <div className="limit-progress" style={{ width: `${limitPercentage}%` }}></div>
        </div>
      </div>}
        <p>Spent: {spent.value} {spent.currency}</p>
        <p>Balance: {available_to_spend.value} {available_to_spend.currency}</p>
      </div>
    </div>
  );
};

export default Card;
