import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.js';

const Main = () => {
  return (
    <Routes basename={process.env.PUBLIC_URL}> 
      <Route exact path='/' element={<Home/>}></Route>
    </Routes>
  );
}

export default Main;