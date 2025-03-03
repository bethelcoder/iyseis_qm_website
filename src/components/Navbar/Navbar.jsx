import React from 'react'
import logo from '../../assets/circle-in-white-logo.png'
import  './Navbar.css'
import '../../index.css'

const Navbar = () => {
  return (
    <nav className='nav-bar container'>
        <img src={logo} alt='logo' className='logo'/>
        <ul className='nav-links'>
            <li><a href='./' className='nav-link'>Home</a></li>
            <li><a href='#' className='nav-link'>About Iyseis</a></li>
            <li><a href='#' className='nav-link'>Services</a></li>
            <li><button className='btn'>Get in touch</button></li>
        </ul>
    </nav>
  )
}

export default Navbar