import { MDBNavbarItem, MDBNavbarLink } from 'mdb-react-ui-kit'
import React from 'react'
import { Link } from 'react-router-dom'
import { setLogout } from "../redux/features/authSlice";
import decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";


const Navbar = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));
    const dispatch = useDispatch();

    const token = user?.token;
    if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) {
          dispatch(setLogout());
        }
      }
      const handleLogout = () => {
        dispatch(setLogout());
      };
  return (
    <div className='navbar'>
        <div className="logo">
            <Link style={{color:'white',textDecoration:'none'}} className='' to='/'><h2>SMS</h2></Link> </div>
        <div className="nav-links">
       {user?.result?._id ? (
        <MDBNavbarItem>
        <MDBNavbarLink href="/login">
          <p className="header-text" onClick={() => handleLogout()}>
           Logout 
          </p>
        </MDBNavbarLink>
        
      </MDBNavbarItem>
       ):
       (
        <MDBNavbarItem>
                <MDBNavbarLink href="/login">
                  <p className="header-text">Login</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
       )
       
       }




         



         
          </div>
          </div>
        
  )
}

export default Navbar