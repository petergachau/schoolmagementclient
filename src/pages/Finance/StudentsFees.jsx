import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate,useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { useDispatch, useSelector } from "react-redux";
import { createProject } from '../../redux/features/projectSlice';
const StudentsFees = () => {
    
  const {projects}=useSelector((state)=>({...state.project}))
  const notify = () => toast("Wow so easy!");
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const [stuffs,setStuffs]=useState([]);
  useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('http://localhost:5000/project')
        setStuffs(  res.data)
       
       } catch (error) {
        console.log(error);
        
      }
      }
      fetchData()
        },[])
    const [form,setForm]=useState({
        name: '',
        regNo: '',
        class: '',
        term: '',
        fees:'',
    })
    
    const handleSubmit= (e)=>{
    
      e.preventDefault()
      // e.target.reset();
      
       dispatch(createProject({...form, toast}))
       
      
      
      
      
  }
  return (
    <>
    <div className="finance-form">
        <h2>Students Fees Payments</h2>
        <form onSubmit={handleSubmit} className="std-form">
            <input type="text" placeholder='student name' onChange={(e)=>setForm({...form, name:e.target.value})} />
            <input type="text" placeholder='student addmission number'  onChange={(e)=>setForm({...form, regNo:e.target.value})} />
            <input type="text" placeholder='student class/year'  onChange={(e)=>setForm({...form, class:e.target.value})} />
            <input type="text" placeholder='term/semester'  onChange={(e)=>setForm({...form, term:e.target.value})} />
            <input type="number" placeholder='termly amount'  onChange={(e)=>setForm({...form, fees:e.target.value})} />
           <button className="btn">Submit</button>
        </form>
        
    </div>
{/* 
{stuffs.map((i)=>{
  return(
          <div className="students-fees">
           _
            <p>Name:{i.name}</p>
            <p>RegNo:{i.regNo}</p>
            <p>Class:{i.class}</p>
            <p>Amount:{i.fees}</p>
          </div>

  )
  
})} */}
    </>
  )
}

export default StudentsFees