import React from 'react';
import ReactDOM from 'react-dom/client';

// Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'

// Components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);