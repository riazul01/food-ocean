import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Groceries from './pages/Groceries';
import Beverages from './pages/Beverages';
import RawProducts from './pages/RawProducts';
import TrendingProducts from './pages/TrendingProducts';
import CategoryProducts from './pages/CategoryProducts';
import SearchResults from './pages/SearchResults';
import HelpCenter from './pages/HelpCenter';
import Offers from './pages/Offers';
import About from './pages/About';

// auth
import Login from './auth/Login';
import Signup from './auth/Signup';

// user
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
import Orders from './pages/Orders';

// cart
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

// context
import { LoginContext } from './context/LoginContextProvider';
import { CartContext } from './context/CartContextProvider';

// style
import './App.css';
import Payment from './pages/Payment';

const App = () => {
  const { currentUser } = useContext(LoginContext);
  const { cartItems, checkoutConfirmed } = useContext(CartContext);

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/user/login" replace/>
  }

  const RequireAddToCart = ({children}) => {
    return cartItems.length >= 1 ? (children) : <Navigate to="/empty-cart" replace />
  }

  const RequireCheckout = ({children}) => {
    return checkoutConfirmed ? (children) : <Navigate to="/checkout" replace />
  }


  return (
    <BrowserRouter>
      <Routes>
        {/* pages */}
        <Route path="/" element={<Home/>}/>
        <Route path="/groceries" element={<Groceries/>}/>
        <Route path="/groceries/beverages" element={<Beverages/>}/>
        <Route path="/groceries/raw-products" element={<RawProducts/>}/>
        <Route path="/groceries/trending" element={<TrendingProducts/>}/>
        <Route path="/groceries/search-results" element={<SearchResults/>}/>
        <Route path="/services/help" element={<HelpCenter/>}/>
        <Route path="/services/about" element={<About/>}/>
        <Route path="/offers" element={<Offers/>}/>

        {/* categories */}
        <Route path="/groceries/trending/:category" element={<CategoryProducts/>}/>
        <Route path="/groceries/beverages/:category" element={<CategoryProducts/>}/>
        <Route path="/groceries/raw-products/:category" element={<CategoryProducts/>}/>
        
        {/* auth */}
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/user/register" element={<Signup/>}/>

        {/* user */}
        <Route path="/user/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="/user/update-profile" element={<RequireAuth><UpdateProfile/></RequireAuth>}/>
        <Route path="/user/orders" element={<RequireAuth><Orders/></RequireAuth>}/>
        
        {/* cart */}
        <Route path="/cart" element={<RequireAddToCart><Cart/></RequireAddToCart>}/>
        <Route path="/checkout" element={
          <RequireAuth>
            <RequireAddToCart>
              <Checkout/>
            </RequireAddToCart>
          </RequireAuth>
        }/>
        <Route path="/payment" element={
          <RequireAuth>
            <RequireCheckout>
              <Payment/>
            </RequireCheckout>
          </RequireAuth>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;