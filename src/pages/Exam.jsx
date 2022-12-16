import React from 'react'
import { Link } from 'react-router-dom'
const Exam = () => {
  return (
    <div className='btnpage'>
       <button ><Link  to='/Exammarkentry' className='linklink'>Exam mark Entry</Link></button>
       <button ><Link  to='/Studentstokens' className='linklink'>Students Tokens</Link></button>
    </div>
  )
}

export default Exam