import React, { useState } from 'react'
// vacation

import { Link, useNavigate,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { useDispatch, useSelector } from "react-redux";
import { createVacation } from '../../redux/features/vacation';
const StudentsFees = () => {
  const {projects}=useSelector((state)=>({...state.project}))
  const notify = () => toast("Wow so easy!");
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const [form,setForm]=useState({
        termlyBgt: '',
        
        maintance: '',
        remarks: '',
       
    })

     const handleSubmit=(e)=>{
        e.preventDefault()
        e.target.reset();
        dispatch(createVacation({...form, toast}))
 

     }
  return (
    <>
    <div className="finance-form">
        <h2>Library Department</h2>
        <form onSubmit={handleSubmit} className="std-form">
            <input type="number" placeholder='Termly bugdet/books/computers' onChange={(e)=>setForm({...form, termlyBgt:e.target.value})} />
            <input type="number" placeholder='maintance funds'  onChange={(e)=>setForm({...form, maintance:e.target.value})} />
            <input type="text" placeholder='remarks'  onChange={(e)=>setForm({...form, term:e.target.value})} />
           <button className="btn">Submit</button>
        </form>
        
    </div>
    </>
  )
}

export default StudentsFees