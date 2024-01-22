import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// context
import LoginContextProvider from './context/LoginContextProvider';
import UserDetailsContextProvider from './context/UserDetailsContextProvider';
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';

// style
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginContextProvider>
      <UserDetailsContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductsContextProvider>
      </UserDetailsContextProvider>
    </LoginContextProvider>
  </React.StrictMode>,
);