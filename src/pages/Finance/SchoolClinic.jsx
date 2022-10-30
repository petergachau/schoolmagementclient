import React, { useState } from 'react'
import { createExpense } from '../../redux/features/expenses'
import { Link, useNavigate,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { useDispatch, useSelector } from "react-redux";
import { createProject } from '../../redux/features/projectSlice';
const StudentsFees = () => {
  const {projects}=useSelector((state)=>({...state.project}))
  const notify = () => toast("Wow so easy!");
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const [form,setForm]=useState({
        budgetMed:'',
        amount:'',
        remarks:''
    })

     const handleSubmit=(e)=>{
        e.preventDefault()
        e.target.reset();
        
        e.preventDefault()
        e.target.reset();
        
         dispatch(createExpense({...form, toast}))
         
        
     }
  return (
    <>
    <div className="finance-form">
        <h2>School Clinic</h2>
        <form onSubmit={handleSubmit} className="std-form">
            <input type="number" placeholder='Term drugs budget' onChange={(e)=>setForm({...form, budgetMed:e.target.value})} />
            <input type="number" placeholder='additional cost '  onChange={(e)=>setForm({...form, amount:e.target.value})} />
            <input type="text" placeholder='remarks'  onChange={(e)=>setForm({...form, remarks:e.target.value})} />
           
           <button className="btn">Submit</button>
        </form>
        
    </div>
    </>
  )
}

export default StudentsFees