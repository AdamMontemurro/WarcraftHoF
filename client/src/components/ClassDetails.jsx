import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ClassDetails = (props) => {

  let {id} = useParams()
  const [thisClass, setClass] = useState('')
  
  useEffect(()=> {
    let selectedClass = props.classes.find(
      (x) => x._id === id
    )
    console.log(selectedClass)
    setClass(selectedClass)
  }, [props.classes, id])

  return thisClass ? (
    <div>
      Class Details
      <h1>{thisClass.name}</h1>
    </div>
  ) : null

}

export default ClassDetails
