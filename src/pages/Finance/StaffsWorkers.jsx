import React, { useState } from 'react'
// summary
import { Link, useNavigate,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { useDispatch, useSelector } from "react-redux";
import { createSummary } from '../../redux/features/summarySlice';
import { createCareTaker } from '../../redux/features/caretaker';

const StudentsFees = () => {
  const dispatch=useDispatch()
    const [form,setForm]=useState({
        name: '',
        empNo: '',
        department: '',
        amount:'',
    })

     const handleSubmit=(e)=>{
        e.preventDefault()
        e.target.reset();
        dispatch(createCareTaker({...form,toast}))

     }
  return (
    <>
    <div className="finance-form">
        <h2>Staffs And Workers</h2>
        <form onSubmit={handleSubmit} className="std-form">
            <input type="text" placeholder='employee name' onChange={(e)=>setForm({...form, name:e.target.value})} />
            <input type="text" placeholder='employee number'  onChange={(e)=>setForm({...form, empNo:e.target.value})} />
            <input type="text" placeholder='department'  onChange={(e)=>setForm({...form, department:e.target.value})} />
            <input type="number" placeholder='monthly amount'  onChange={(e)=>setForm({...form, amount:e.target.value})} />
           <button className="btn">Submit</button>
        </form>
        
    </div>
    </>
  )
}

export default StudentsFees