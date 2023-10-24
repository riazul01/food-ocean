import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';

// style
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>
);