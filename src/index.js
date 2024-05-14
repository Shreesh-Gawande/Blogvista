import React from 'react';
import ReactDOM from 'react-dom/client';
import Signin from './components/signin'
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Signin/>
  </React.StrictMode>
);

reportWebVitals();
