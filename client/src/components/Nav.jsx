import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className="navbar">
      <h4>Nav</h4>
      <div>
      <NavLink to="/">Home</NavLink>
      <br></br>
      <NavLink to="/Classes"> Classes</NavLink>
      </div>
    </nav>
  )
}

export default Nav