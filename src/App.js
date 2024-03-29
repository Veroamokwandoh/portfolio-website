import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Works/>
     <Portfolio/>
    </div>
  );
}

export default App;
