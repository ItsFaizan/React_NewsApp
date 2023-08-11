import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Navbar } from './components/Navbar'; 
import { NewsDetails } from './components/NewsDetails'; 
import { NewsCategory } from './components/NewsCategory';

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
      <Route path="/" element={<div><Navbar/><Home /></div>} />
      <Route path="/newsdetails/:id" element={<div><Navbar/><NewsDetails /></div>} />
      <Route path="/category/:categoryName" element={<div><Navbar/><NewsCategory /></div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
