import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
// Portfolio View
// import App from './PortfolioWebsite/App/App';
import App from './AnaBabyShowerWebsite/components/App/App';

ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);