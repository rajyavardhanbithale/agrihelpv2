import { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


import CompileWeather from './components/weather/CompileWeather'

import Navbar from './components/Navbar'
import AgriShop from './components/shop/AgriShop'



import Home from './components/Home'
import Seed from './components/shop/Seed';
import Fertilizer from './components/shop/Fertilizer';
import Equipment from './components/shop/Equipment';

function App() {
  const hostname = window.location.hostname;
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/weather" element={<CompileWeather/>}/>
        <Route path="/soil-analysis" element={<CompileWeather/>}/>
        <Route path="/shop" element={<AgriShop/>}/>
        <Route path="/chat-room" element={<CompileWeather/>}/>
        <Route path="/pest-control" element={<CompileWeather/>}/>
        <Route path="/resources" element={<CompileWeather/>}/>
        <Route path="/gov-scheme" element={<CompileWeather/>}/>


        {/* Shop */}
        <Route path="/seed" element={<Seed/>}/>
        <Route path="/fertilizer" element={<Fertilizer/>}/>
        <Route path="/equipment" element={<Equipment/>}/>


      </Routes>
    </Router>

    <h1>dsfks;lfds</h1>


    </>
  )
}

export default App
