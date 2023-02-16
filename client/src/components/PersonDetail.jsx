import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PersonSpecifics from './PersonSpecifics'
import { useNavigate } from 'react-router-dom'

const PersonDetail = (props) => {

  let {id} = useParams()
  const [thisPerson, setPerson] = useState('')
  let navigate = useNavigate()

  const goBack = ()=> {
  navigate('/hof')
  }


  useEffect(()=> {
    let selectedPerson = props.people.find(
      (x) => x._id === id
    )
    setPerson(selectedPerson)
  }, [props.people, id])






if (thisPerson.class === "63ee84867c15b2fa0a873bba") {
  return (
    <div>
      <PersonSpecifics img={thisPerson.img} name={thisPerson.name} race={thisPerson.race} status={thisPerson.status} involvements={thisPerson.involvements} />
      <h2 className='classDetail'><span className='classAttribute'>Class: </span>Shaman </h2>
      <button className="back" onClick={goBack}>Back</button>
    </div>
  )
} else if (thisPerson.class === "63ee84867c15b2fa0a873bc3") {
  return (
    <div>
      <PersonSpecifics img={thisPerson.img} name={thisPerson.name} race={thisPerson.race} status={thisPerson.status} involvements={thisPerson.involvements} />
      <h2 className='classDetail'><span className='classAttribute'>Class: </span>Mage </h2>
      <button className="back" onClick={goBack}>Back</button>
    </div>
  )
}else if (thisPerson.class === "63ee84867c15b2fa0a873bbe") {
  return (
    <div>
      <PersonSpecifics img={thisPerson.img} name={thisPerson.name} race={thisPerson.race} status={thisPerson.status} involvements={thisPerson.involvements} />
      <h2 className='classDetail'><span className='classAttribute'>Class: </span>Druid </h2>
      <button className="back" onClick={goBack}>Back</button>
    </div>
  )
}
}

export default PersonDetail
