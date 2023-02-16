
import { useParams, useNavigate, } from 'react-router-dom'
import { useEffect, useState } from 'react'


const ClassDetails = (props) => {

  let {id} = useParams()
  const [thisClass, setClass] = useState('')
  const navigate = useNavigate()

  useEffect(()=> {
    let selectedClass = props.classes.find(
      (x) => x._id === id
    )

    setClass(selectedClass)
  }, [props.classes, id])

const goBack =() => {
  navigate('/Classes')
}


  return thisClass ? (
    <div>
      <h1>{thisClass.name}</h1>
      <img src={thisClass.img} alt="Class Insignia" />
      <h2 className='classDetail'><span className='classAttribute'>Primary Attribute:</span> {thisClass.primary_attribute} </h2>
      <h2 className='classDetail'><span className='classAttribute'>Role:</span> {thisClass.role}  </h2>
      <h2 className='classDetail'><span className='classAttribute'>Specializations:</span> {thisClass.specs}</h2>
      <h2 className='classDetail'><span className='classAttribute'>Description:</span></h2>
      <button className="back" onClick={goBack}>Back</button>
    </div>
  ) : null

}

export default ClassDetails
