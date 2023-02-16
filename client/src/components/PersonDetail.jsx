import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PersonSpecifics from './PersonSpecifics'

const PersonDetail = (props) => {

  let {id} = useParams()
  const [thisPerson, setPerson] = useState('')



  useEffect(()=> {
    let selectedPerson = props.people.find(
      (x) => x._id === id
    )
    setPerson(selectedPerson)
  }, [props.people, id])

if (thisPerson.class === "63ed10e6edfa3b20759f9d40") {
  return (
    <div>
      <PersonSpecifics img={thisPerson.img} name={thisPerson.name} race={thisPerson.race} status={thisPerson.status} involvements={thisPerson.involvements} />
      <h2 className='classDetail'><span className='classAttribute'>Class: </span>Shaman </h2>
    </div>
  )
} else if (thisPerson.class === "63ed10e6edfa3b20759f9d41") {
  return (
    <div>
      <PersonSpecifics img={thisPerson.img} name={thisPerson.name} race={thisPerson.race} status={thisPerson.status} involvements={thisPerson.involvements} />
      <h2 className='classDetail'><span className='classAttribute'>Class: </span>Mage </h2>
    </div>
  )
}else if (thisPerson.class === "63ed10e6edfa3b20759f9d44") {
  return (
    <div>
      <PersonSpecifics img={thisPerson.img} name={thisPerson.name} race={thisPerson.race} status={thisPerson.status} involvements={thisPerson.involvements} />
      <h2 className='classDetail'><span className='classAttribute'>Class: </span>Druid </h2>
    </div>
  )
}
}

export default PersonDetail
