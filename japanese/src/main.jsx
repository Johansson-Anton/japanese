import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Create a root for the React app
const root = createRoot(document.getElementById('root'));

// Render the main App component into the root div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
