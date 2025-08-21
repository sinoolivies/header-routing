import React from 'react'

import { Routes, Route } from "react-router-dom";


import Header from './components/Header';
import Footer from "./components/Footer";
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Solutions from './pages/Solutions';


function App() {
  return (
    
    <>
    <Header/>
      <Routes>
        <Route path='/' element={ <Features/> }/>
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/sesourses' element={<Resources/>}/>
        <Route path='/solutions' element={<Solutions/>}/>

      
    </Routes>
     <Footer />
    </>
  )
}

export default App