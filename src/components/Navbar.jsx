import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <Link className='link' to='/'><h2>SMS</h2></Link> </div>
        <div className="nav-links">
            <Link className='link' to='/login'>
                Login
            </Link>
            <Link className='link' to='/register'>
                Register
            </Link>
        </div>

    </div>
  )
}

export default Navbar