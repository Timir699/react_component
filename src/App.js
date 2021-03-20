import { useState, Fragment } from 'react'
import Persons from './components/Persons'


import './App.css';

function App() {
  let persons = [
    {
      name : "Islam Timir",
      designation : "Frontend Developer",
      color : 'orangered',
      bg : 'gray', 
      white : 'white'
    },
    {
        name : "Rijwan ahmed",
          designation : "Backend Developer",
          color : 'yellow',
          bg : 'blue' 
    },
    {
      name : "sohanur rahman",
          designation : "Data Scientist",
          color : 'red',
          bg : 'gray'
    },
    {
      name : "Asif mahier",
      designation : "Frontend Developer",
      color : 'tomato',
      bg : '#efefef'
    },
    {
      name : "Sk",
          designation : "UI UX Master",
          color : 'brown',
          bg : 'green' 
    }
  ]
  return (
    <div style = {{ margin : "20px"}} >
      {
        persons.map( person => {
          return (
            <Persons person = {person} />
          )
        })
      }  


    </div>
  );
}

export default App
