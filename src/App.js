import React from 'react';
import Navbar from './components/Navbar';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
import Comp4 from './components/Comp4';
import Comp5 from './components/Comp5';
import Comp6 from './components/Comp6';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
      <Comp6 />
    </div>
  );
}

export default App;
