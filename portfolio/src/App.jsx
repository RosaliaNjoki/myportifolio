import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';


  const App = ()=> {

    return (
      <Router>
        <Header/>
        <Hero/>
        <Routes>
          <Route path ='/' element={<Home />}/>
          <Route path ="/about"element ={<About/>} />
          <Route path ="/contact" element ={<Contact/>} />
          <Route path ="/projects" element={<Projects/>} />
        </Routes>
        <Footer/>
      </Router>

    );
  };

export default App
