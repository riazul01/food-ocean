import React from 'react';
import ProductUpload from './pages/ProductUpload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/upload-product" element={<ProductUpload/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;