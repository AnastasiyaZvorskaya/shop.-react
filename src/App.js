import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import About from './router/About';
import Home from './router/Home';
import Solution from './router/Solution';
import Support from './router/Support';


function App() {
  return (
    <div className='body'>
     <BrowserRouter>
          <Routes >
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/solution" element={<Solution/>} />
            <Route path="/support" element={<Support/>} />
           </Routes>    
         <Footer/>
    </BrowserRouter> 
    
    </div>
  );
}

export default App;

