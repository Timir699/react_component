import React from 'react'
import Person from '../assets/images/Person.jpg'

let Persons = (props) => {
    let {name , designation, color, bg} = props
    return (
        <div style = {{
            background : bg,
            padding : "20px",
            marginBottom: "20px"
        }}>
            <h2 style = {{ color }} > {name} </h2>
            <h4 style = {{ bg }}>{designation}</h4>
            <img src ={Person} height = "300px" alt = "Timir Image"/>
        </div>
    )
}
export default Persons