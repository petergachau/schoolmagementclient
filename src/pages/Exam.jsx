import React from 'react'
import { Link } from 'react-router-dom'
const Exam = () => {
  return (
    <>
    <h2>Marks Entry</h2>
    <div className='btnpage'>
       <button style={{backgroundColor:'black'}} ><Link  to='/Exammarkentry' className='linklink'> 
       <h5 style={{color:'white'}}>Exam mark Entry</h5> </Link></button>
       <button style={{backgroundColor:'black'}} ><Link  to='/Studentstokens' className='linklink'> <h5 style={{color:'white'}}> Students Tokens</h5></Link></button>
    </div>
    </>
  )
}

export default Exam