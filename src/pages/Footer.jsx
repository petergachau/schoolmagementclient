import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'

const Footer = () => {
  const year = new Date().getFullYear()
  const navLinks=[
    {
      path:'/home',
      name:'Home'
    },
    {
      path:'#',
      name:'About'
    },
    {
      path:'/tours',
      name:'Tours'
    },
  ]

  
  return (
    <footer className='footer'>
      
              <p className="copyright">
                Copyright {year} developed by peter. All rights reserved.
              </p>
            
    </footer>
  )
}

export default Footer