import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MainAdmission = () => {
 
   
    return (
      <>
      <h2 >Students Addimission</h2>
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
  <Link to='/class1'>
    <Button>
      Class 1
    </Button>
  </Link>
  <Link to='/class2'>
    <Button>
      Class 2
    </Button>
  </Link>
  <Link to='/class3'>
    <Button>
      Class 3
    </Button>
  </Link>
  <Link to='/class4'>
    <Button>
      Class 4
    </Button>
  </Link>
  <Link to='/class5'>
    <Button>
      Class 5
    </Button>
  </Link>
  <Link to='/class6'>
    <Button>
      Class 6
    </Button>
  </Link>
  <Link to='/class7'>
    <Button>
      Class 7
    </Button>
  </Link>
  <Link to='/class8'>
    <Button>
      Class 8
    </Button>
  </Link>
</div>
  </>    
  )
}

export default MainAdmission