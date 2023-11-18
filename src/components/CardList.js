import React, { useState, useEffect } from 'react';
import Card from './Card';
import './CardList.css'; // Import your CSS file

const mockData = {
  data: [
    {
      name: 'Example Card 1',
      budget_name: 'Software subscription',
      owner_id: 1,
      spent: {
        value: 100,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 1000,
        currency: 'SGD',
      },
      card_type: 'burner',
      expiry: '9 Feb',
      limit: 100,
      status: 'active',
    },
    {
      name: 'Example Card 2',
      budget_name: 'Software subscription',
      owner_id: 2,
      spent: {
        value: 50,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 250,
        currency: 'SGD',
      },
      card_type: 'subscription',
      limit: 10,
      status: 'active',
    },
    {
      name: 'Example Card 3',
      budget_name: 'Entertainment',
      owner_id: 3,
      spent: {
        value: 75,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 300,
        currency: 'SGD',
      },
      card_type: 'burner',
      expiry: '15 Mar',
      limit: 150,
      status: 'active',
    },
    {
      name: 'Example Card 4',
      budget_name: 'Groceries',
      owner_id: 4,
      spent: {
        value: 30,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 200,
        currency: 'SGD',
      },
      card_type: 'subscription',
      limit: 20,
      status: 'active',
    },
    {
      name: 'Example Card 5',
      budget_name: 'Travel',
      owner_id: 5,
      spent: {
        value: 120,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 500,
        currency: 'SGD',
      },
      card_type: 'burner',
      expiry: '20 Apr',
      limit: 200,
      status: 'active',
    },
    {
      name: 'Example Card 6',
      budget_name: 'Clothing',
      owner_id: 6,
      spent: {
        value: 40,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 100,
        currency: 'SGD',
      },
      card_type: 'subscription',
      limit: 15,
      status: 'active',
    },
    {
      name: 'Example Card 7',
      budget_name: 'Home Improvement',
      owner_id: 7,
      spent: {
        value: 90,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 400,
        currency: 'SGD',
      },
      card_type: 'burner',
      expiry: '25 May',
      limit: 180,
      status: 'active',
    },
    {
      name: 'Example Card 8',
      budget_name: 'Dining Out',
      owner_id: 8,
      spent: {
        value: 60,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 150,
        currency: 'SGD',
      },
      card_type: 'subscription',
      limit: 25,
      status: 'active',
    },
    {
      name: 'Example Card 9',
      budget_name: 'Healthcare',
      owner_id: 9,
      spent: {
        value: 25,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 80,
        currency: 'SGD',
      },
      card_type: 'burner',
      expiry: '30 Jun',
      limit: 120,
      status: 'active',
    },
    {
      name: 'Example Card 10',
      budget_name: 'Electronics',
      owner_id: 10,
      spent: {
        value: 150,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 600,
        currency: 'SGD',
      },
      card_type: 'subscription',
      limit: 30,
      status: 'active',
    },
    // Add more example cards as needed
  ],
};

const CardList = ({ filter, searchTerm }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API or use mock data
    // Replace the setTimeout with your actual API call
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setCards(mockData.data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  // Apply filtering based on the selected filter
  let filteredCards = cards;

  if (filter.length > 0) {
    filteredCards = cards.filter((card) => filter.includes(card.card_type));
  }

  return (
    <div className="card-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredCards
          .filter((card) => card.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((card) => <Card key={card.name} card={card} />)
      )}
    </div>
  );
};

export default CardList;
