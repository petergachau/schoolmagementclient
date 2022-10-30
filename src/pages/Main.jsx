import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main className="main">
        <div className="buttons1">
             <button className="btn"><Link className='link' to='/library' >Library Department</Link></button>
        <button className="btn"><Link className='link' to='/store' >Store Department</Link></button>
        <button className="btn"><Link className='link' to='/finance' >Finance Department</Link></button>
        </div>
       <div className="buttons2">
         <button className="btn"><Link className='link' to='/exam' >Exams Department</Link></button>
        <button className="btn"><Link className='link' to='/queries' >Queries Department</Link></button>
        <button className="btn"><Link className='link' to='/allreports' >All Reports Department</Link></button>
        
       </div>
       
        
        
        
        
        
    </main>
  )
}

export default Main