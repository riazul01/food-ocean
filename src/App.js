import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import HelpCenter from './pages/HelpCenter';

// products
import Groceries from './pages/products/Groceries';
import Beverages from './pages/products/Beverages';
import RawProducts from './pages/products/RawProducts';
import TrendingProducts from './pages/products/TrendingProducts';
import CategoryProducts from './pages/products/CategoryProducts';
import SearchResults from './pages/products/SearchResults';
import Offers from './pages/products/Offers';

// auth
import Login from './auth/Login';
import Signup from './auth/Signup';
import ResetPassword from './auth/ResetPassword';

// user
import User from './pages/user/User';
import Profile from './pages/user/Profile';
import UpdateProfile from './pages/user/UpdateProfile';
import Orders from './pages/user/Orders';
import OrderDetails from './pages/user/OrderDetails';
import DeleteAccount from './pages/user/DeleteAccount';

// cart
import Cart from './pages/cart/Cart';
import Checkout from './pages/cart/Checkout';
import Payment from './pages/cart/Payment';
import EmptyCart from './pages/cart/EmptyCart';

// effects
import ScrollToTop from './effects/ScrollToTop';

// context
import { LoginContext } from './context/LoginContextProvider';
import { CartContext } from './context/CartContextProvider';

// style
import './App.css';

const App = () => {
  const { currentUser } = useContext(LoginContext);
  const { cartItems, checkoutConfirmed } = useContext(CartContext);

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/user/login" replace/>
  }

  const RequireAddToCart = ({children}) => {
    return cartItems.length >= 1 ? (children) : <Navigate to="/empty-cart" replace />
  }

  const RequireEmptyCart = ({children}) => {
    return cartItems.length === 0 ? (children) : <Navigate to="/cart" replace />
  }

  const RequireCheckout = ({children}) => {
    return checkoutConfirmed ? (children) : <Navigate to="/checkout" replace />
  }

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        {/* pages */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/help" element={<HelpCenter/>}/>

        {/* products */}
        <Route path="/groceries" element={<Groceries/>}/>
        <Route path="/groceries/beverages" element={<Beverages/>}/>
        <Route path="/groceries/raw-products" element={<RawProducts/>}/>
        <Route path="/groceries/trending" element={<TrendingProducts/>}/>
        <Route path="/groceries/search-results" element={<SearchResults/>}/>
        <Route path="/offers" element={<Offers/>}/>

        {/* categories */}
        <Route path="/groceries/trending/:category" element={<CategoryProducts/>}/>
        <Route path="/groceries/beverages/:category" element={<CategoryProducts/>}/>
        <Route path="/groceries/raw-products/:category" element={<CategoryProducts/>}/>
        
        {/* auth */}
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/user/register" element={<Signup/>}/>
        <Route path="/user/reset-password" element={<ResetPassword/>}/>

        {/* user */}
        <Route path="/user" element={<RequireAuth><User/></RequireAuth>}/>
        <Route path="/user/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="/user/update-profile" element={<RequireAuth><UpdateProfile/></RequireAuth>}/>
        <Route path="/user/orders" element={<RequireAuth><Orders/></RequireAuth>}/>
        <Route path="/user/orders/:id" element={<RequireAuth><OrderDetails/></RequireAuth>}/>
        <Route path="/user/delete-account" element={<RequireAuth><DeleteAccount/></RequireAuth>}/>
        
        {/* cart */}
        <Route path="/cart" element={<RequireAddToCart><Cart/></RequireAddToCart>}/>
        <Route path="/empty-cart" element={<RequireEmptyCart><EmptyCart/></RequireEmptyCart>}/>
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