import React from 'react'
import {Link} from 'react-router-dom'

const Classes = ({classes}) => {



  return (
    <div id="container">
   <div className="classgrid">
      <h1 id="Classes">Classes:</h1>

      {classes.map((each) => (
        <div className="classesDiv" key={each._id} >
          <Link to={`${each._id}`}>
          <h3 id="classDivText">Class: {each.name}</h3>
          <img src={each.img}></img>        
          </Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Classes
