import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Groceries from './pages/Groceries';
import RawProducts from './pages/RawProducts';
import Beverages from './pages/Beverages';
import CategoryProducts from './pages/CategoryProducts';
import SearchResults from './pages/SearchResults';
import ProductUpload from './pages/ProductUpload';

// style
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/groceries" element={<Groceries/>}/>
        <Route path="/groceries/:category" element={<CategoryProducts/>}/>
        <Route path="/groceries/search-results" element={<SearchResults/>}/>
        <Route path="/groceries/raw-products" element={<RawProducts/>}/>
        <Route path="/groceries/beverages" element={<Beverages/>}/>
        <Route path="/groceries/raw-products/:category" element={<CategoryProducts/>}/>
        <Route path="/groceries/beverages/:category" element={<CategoryProducts/>}/>
        <Route path="/upload-product" element={<ProductUpload/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;