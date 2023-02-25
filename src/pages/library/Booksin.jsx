import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { createNotice } from '../../redux/features/noticeSlice';
import { createVacation } from '../../redux/features/vacation';

const LibRegistration = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
const [form,setForm]=useState({
  bookId:'',
  ISNB:'',
  bookTitle:'',
  tota:'',
 
})

const handleSubmit=(e)=>{
  e.preventDefault()
  e.target.reset();
       if (form){
        const updateddata={...form}
       if(!id){
        dispatch(createVacation(updateddata,toast))
        // navigate('/student')
       }
       
       
       }
}
const {id}=useParams
  return (
    <div className="general-form">
       <h4 style={{ color:  'rgb(255, 157, 0)'}}>Books in</h4>
      <form onSubmit={handleSubmit} >
        
          <label htmlFor="">Book id</label>
        <input type="text" placeholder='books id' className='Minputs' onChange={(e)=>setForm({...form,bookId:e.target.value})} />
       
         <label htmlFor="">ISNB Number</label>
        <input type="text" placeholder='ISNB Number' onChange={(e)=>setForm({...form,ISNB:e.target.value})} className='Minputs' />
        <label htmlFor="">Book Title</label>
        <input type="text" placeholder='Book Title' onChange={(e)=>setForm({...form,bookTitle:e.target.value})} className='Minputs'  />
        <label htmlFor="">Books Total</label>
        <input type="number" placeholder='Books Total' onChange={(e)=>setForm({...form,total:e.target.value})} className='Minputs'  />
        
        
        <button className="btn">
          Submit
        </button>
        
     
      </form>
    </div>
  )
}

export default LibRegistration