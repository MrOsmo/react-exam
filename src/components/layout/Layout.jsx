import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Userprofile from '../pages/userprofiles/Userprofile';
import Home from '../pages/home/Home';
import Header from './header/Header';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user/:id' element={<Userprofile />} />
      </Routes>
    </div>
  );
}

export default Layout;
