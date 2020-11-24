import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>rodems.dev();</title>
        <meta name="description" content="Personal website for Corey Rodems" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

renderMethod(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
