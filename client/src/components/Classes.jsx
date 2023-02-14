import React from 'react'
import {Link} from 'react-router-dom'

const Classes = ({classes}) => {



  return (
    <div className="classgrid">
      <h1>Classes:</h1>

      {classes.map((each) => (
        <div key={each._id} >
          <Link to={`${each._id}`}>
          <h3>Class: {each.name}</h3>
          <img src={each.img}></img>        
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Classes
