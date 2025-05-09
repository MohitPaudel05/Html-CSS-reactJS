import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <nav className='Container'>
        <img src={logo} alt="logo.png" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>Semester</li>
            <li>Past Questions</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>

    </nav>
  )
}

export default Navbar

