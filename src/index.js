import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductsContextProvider from './context/ProductContextProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </React.StrictMode>
);