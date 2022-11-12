import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactForm from './Pages/Home/ContactForm';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
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
        <Route path='/contact' element={<ContactForm/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>


      </Routes>

      <Footer/>

    </div>
  );
};

export default App;