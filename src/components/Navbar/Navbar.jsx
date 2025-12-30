import React from 'react'
import "./Navbar.css"
import elias from "../../assets/elias.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='BIG'>
      <div className="NAVBAR">
        <img src={elias} alt="elias-image" />

        <div className="links">
          <Link className='LINK' to='/'><span className='sharp'>#</span>home</Link>
          <Link className='LINK' to='/Projects'><span className='sharp'>#</span>works</Link>
          <Link className='LINK' to='about'><span className='sharp'>#</span>about me</Link>
          <Link className='LINK' to='contacts'><span className='sharp'>#</span>contacts</Link>

          <select className='SELECT'>
            <option value="en">EN</option>
            <option value="rus">RU</option>
            <option value="uzb">UZ</option>
          </select>
        </div>

      </div>
    </div>
  )
}

export default Navbar