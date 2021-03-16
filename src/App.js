import { useState, Fragment } from 'react'
import Persons from './components/Persons'


import './App.css';

function App() {
  return (
    <div style = {{ margin : "20px"}} >
        <Persons 
          name = "Islam Timir"
          designation = "Frontend Developer"
          color = 'orangered'
          bg = 'gray'      
        />

        <Persons 
          name = "Rijwan ahmed"
          designation = "Backend Developer"
          color = 'yellow'
          bg = 'blue'      
        />


    </div>
  );
}

export default App
