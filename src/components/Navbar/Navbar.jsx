import "./navbar.css"

import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navContainer">
            <span className="logo">ModiBooking</span>
            <div className="navButton">Register</div>
            <div className="navButton">Login</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
