import React from 'react'

const PersonSpecifics = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img className='personDetailImg' src={props.img}></img>
      <h2 className='classDetail'><span className='classAttribute'>Race: </span>{props.race} </h2>
      <h2 className='classDetail'><span className='classAttribute'>Status: </span>{props.status} </h2>
      <h2 className='classDetail'><span className='classAttribute'>Involvements: </span>{props.involvements} </h2>
    </div>
  )
}

export default PersonSpecifics
