import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Classes = () => {

  const [classes, setClasses] = useState([])

  const getClasses = async () => {
    try {
      let response = await axios.get('http://localhost:3001/classes')
      setClasses(response.data.classes)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getClasses()
  }, [])

  return (
    <div>
      <h1>Classes:</h1>

      {classes.map((each) => (
        <div key={each._id}>
          <h3>Class: {each.name}</h3>
          <img src={each.img}></img>
          <p>Role: {each.role} </p>
          <p>Armor Type: {each.armor_type} </p>
          <p>Primary Attribute: {each.primary_attribute}</p>
          
        </div>
      ))}
    </div>
  )
}

export default Classes
