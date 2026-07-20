import React from 'react'
import { Link } from 'react-router-dom'
import '../style/navbar.css'


function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='logo'>to do app</div>
        <ul className='nav-links'>
            <li><Link to="/">List </Link></li>
            <li><Link to="/add">Add Task</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
