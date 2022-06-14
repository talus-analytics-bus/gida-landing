import { Link } from 'gatsby'
import React from 'react'

const Nav = () => (
  <nav className="navbar">
    <div className="wrapper">
      <Link className="nav-logo-container" to="/">
        <img
          src="/assets/small-logo.png"
          alt="IDEA logo"
          className="nav-logo"
        />
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link activeClassName="active" to="/about">
          About
        </Link>
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

export default Nav
