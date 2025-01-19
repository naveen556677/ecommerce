// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Main />
  </Router>
);
