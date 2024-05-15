import React from 'react';
import ReactDOM from 'react-dom/client';
//import Signin from './components/signin'
import Home from "./components/home.js"
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Home/>
  </React.StrictMode>
);

reportWebVitals();
