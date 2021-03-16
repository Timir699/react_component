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

        <Persons 
          name = "sohanur rahman"
          designation = "Data Scientist"
          color = 'red'
          bg = 'gray'      
        />

        <Persons 
          name = "Asif mahier"
          designation = "Frontend Developer"
          color = 'tomato'
          bg = '#efefef'      
        />

        <Persons 
          name = "Sk"
          designation = "UI UX Master"
          color = 'brown'
          bg = 'green'      
        />


    </div>
  );
}

export default App
