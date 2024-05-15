import React from 'react';
import ReactDOM from 'react-dom/client';
//import Signin from './components/signin'
//import Home from "./components/home.js"
import Login from "./components/login"
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Login/>
  </React.StrictMode>
);

reportWebVitals();
