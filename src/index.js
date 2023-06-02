import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainHeader from './MainHeader';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainHeader />
  </React.StrictMode>
);

reportWebVitals();
