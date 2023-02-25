import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

const MainFinanaceReport = () => {
  return (
    <div style={{
        width:'100%',
        display:'flex',
        fleDirection:'row',
        flexWrap:'wrap',
        
        alignItems:'center',
    justifyContent:'center',
    gap:'14rem',
    marginTop:'17%'
}}>
    <Link to='/studentfeesreport'>
    <button className='btn'>
            Students Fees
        </button>
    </Link>
    <Link to='/bordingbudget'>
    <button className='btn'>
            Bording Budget
        </button>
    </Link>
    <Link to='/librarybudget'>
    <button className='btn'>
            Library Budget
        </button>
    </Link>
    <Link to='/clinicbudget'>
    <button className='btn'>
           Clinic Budget
        </button>
    </Link>
    <Link to='/staffreport'>
    <button className='btn'>
           Stuff Budget
        </button>
    </Link>
        
    </div>
  )
}

export default MainFinanaceReport



// const MainFinanace = () => {
//   return (
//     
//   )
// }

// export default MainFinanace