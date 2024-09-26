import React from 'react';
import './App.css'
import Logo from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import Connect from './Components/Connects/Connect';
import Projects from './Components/Projects/Projects';

function App() {
  return (
  <>
  <div className="container">
  <Logo/> 
  <HeroSection/>
  </div>
  <Projects/>
  <Connect/>
  </> 
  
  )
}

export default App
