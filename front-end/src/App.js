import logo from './logo.svg';
import './App.css';
import  { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Details from './Components/Details';
import Footer from './Components/Footer';
function App() {
    return(
      <>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Home />}/>
            <Route path='/details' element={<Details/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
