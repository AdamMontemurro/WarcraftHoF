import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className="navbar">
      <h4>Nav</h4>
      <div>
      <NavLink className="nav" to="/">Home</NavLink>
      <br></br>
      <NavLink className="nav" to="/Classes"> Classes</NavLink>
      <br></br>
      <NavLink className="nav" to="/hof">Hall of Fame</NavLink>
      </div>
    </nav>
  )
}

export default Nav