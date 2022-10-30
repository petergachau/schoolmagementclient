import React, { useState } from 'react'
//complain=boardingfinance


import { Link, useNavigate,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { useDispatch, useSelector } from "react-redux";
import { createComplain } from '../../redux/features/complain';
const StudentsFees = () => {

  const {projects}=useSelector((state)=>({...state.project}))
  const notify = () => toast("Wow so easy!");
  const dispatch=useDispatch()
  const navigate=useNavigate()

    const [form,setForm]=useState({
        maintanace: '',
        termlyBudget: '',
        
        remarks: '',
        
    })

     const handleSubmit=(e)=>{
        e.preventDefault()
        e.target.reset();
                 dispatch(createComplain({...form, toast}))


     }
  return (
    <>
    <div className="finance-form">
        <h2>Boarding department</h2>
        <form onSubmit={handleSubmit} className="std-form">
            <input type="number" placeholder='Termly Budget' onChange={(e)=>setForm({...form, termlyBudget:e.target.value})} />
            <input type="number" placeholder='Manintance'  onChange={(e)=>setForm({...form, maintanace:e.target.value})} />
            <input type="text" placeholder='Remarks'  onChange={(e)=>setForm({...form, remarks:e.target.value})} />
            
           <button className="btn">Submit</button>
        </form>
        
    </div>
    </>
  )
}

export default StudentsFees