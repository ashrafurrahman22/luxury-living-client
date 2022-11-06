import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

const App = () => {
  return (
    <div
    style={{
      fontFamily:"poppins"
    }}    
    >

        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>

      <Footer/>

    </div>
  );
};

export default App;