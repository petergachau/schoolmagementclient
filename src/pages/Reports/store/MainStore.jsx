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
  <Link to='/issues'>
    <Button>
      Stores Issues Report
    </Button>
  </Link>
  <Link to='/supplies'>
    <Button>
      Store Supplies Report
    </Button>
  </Link>
  </div>
  </>
  )
}

export default MainBoarding