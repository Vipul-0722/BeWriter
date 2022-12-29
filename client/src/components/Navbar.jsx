import React from 'react'
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
          <div className='logo'>
            <img src={logo} alt='logo'></img>
           </div>
          <div className='links'>
            <Link className='link' to='/?cat=art'>
              <h6>ART</h6>
            </Link>

            <Link className='link' to='/?cat=art'>
              <h6>TECHNOLOGY</h6>
            </Link>

            <Link className='link' to='/?cat=art'>
              <h6>DESIGN</h6>
            </Link>

              <Link className='link' to='/?cat=art'>
              <h6>FOOD</h6>
            </Link>

              <Link className='link' to='/?cat=art'>
              <h6>CINEMA</h6>
            </Link>
           <span>Vipul</span>
           <span>Logout</span>
           <span className='write'>
               <Link className='link' to='/write'>Write</Link>
           </span>
          </div>
        </div>
         
    </div>
  )
}

export default Navbar