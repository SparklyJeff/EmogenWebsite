import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.js';
import Contact from '../pages/Contact.js';

const Main = () => {
  return (
    <Routes> 
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
    </Routes>
  );
}

export default Main;