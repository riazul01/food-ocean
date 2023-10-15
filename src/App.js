import React from 'react';
import ProductUpload from './pages/ProductUpload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';

import './App.css';
import Groceries from './pages/Groceries';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/groceries" element={<Groceries/>}/>
        <Route path="/upload-product" element={<ProductUpload/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;