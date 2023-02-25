import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MainBoarding = () => {
  return (
    <>
      <h2 >Boarding</h2>
      <div style={{
        width:'100%',
        display:'flex',
        fleDirection:'row',
        flexWrap:'wrap',
        
        alignItems:'center',
    justifyContent:'center',
    gap:'12rem',
    marginTop:'13%'
}}>
  <Link to='/kitchen'>
    <Button>
      Kitchen Report
    </Button>
  </Link>
  <Link to='/medical'>
    <Button>
      Medical Report
    </Button>
  </Link>
  </div>
  </>
  )
}

export default MainBoarding