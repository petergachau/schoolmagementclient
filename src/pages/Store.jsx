import React from 'react'
import { Link } from 'react-router-dom'

const Store = () => {
  return (
    <>
    <h2>Store Department</h2>
    
    <div className='btnpage'>
       <button className="btn"><Link className='link' to='/Storesupplies' >Store Supplies</Link></button>
        <button className="btn"><Link className='link' to='/Storeissues' >Store issues</Link></button>
    </div>
    </>
  )
}

export default Store