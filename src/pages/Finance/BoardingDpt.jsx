import React, { useState } from 'react'
//complain=boardingfinance


import { Link, useNavigate,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { useDispatch, useSelector } from "react-redux";
import { createVacation } from '../../redux/features/vacation';
import { Button } from 'react-bootstrap';
import { createComplain } from '../../redux/features/complain';
import { createCaretakerVacation } from '../../redux/features/caretakerVacation';
const StudentsFees = () => {

  const {projects}=useSelector((state)=>({...state.project}))
  const notify = () => toast("Wow so easy!");
  const dispatch=useDispatch()
  const navigate=useNavigate()

    const [form,setForm]=useState({
      maintance: '',
        termlyBgt: '',
        
        remarks: '',
        
    })

     const handleSubmit=(e)=>{
        e.preventDefault()
        // e.target.reset();
                 dispatch(createCaretakerVacation({...form, toast}))


     }
  return (
    <>
    <div className="finance-form">
        <h2>Boarding department</h2>
        <form onSubmit={handleSubmit} className="std-form">
          <label htmlFor="">Termly Budget</label>
            <input type="number" placeholder='Termly Budget' onChange={(e)=>setForm({...form, termlyBgt:e.target.value})} />
            <label htmlFor="">Manintance</label>

            <input type="number" placeholder='Manintance'  onChange={(e)=>setForm({...form, maintance:e.target.value})} />
            <label htmlFor="">Remarks</label>

            <input type="text" placeholder='Remarks'  onChange={(e)=>setForm({...form, remarks:e.target.value})} />
            
           <button className="btn">Submit</button>
        </form>
        
    </div>
    </>
  )
}

export default StudentsFees