import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client

import App from './App';

// Use createRoot from react-dom/client
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
