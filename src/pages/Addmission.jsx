import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { createAdmission } from '../redux/features/AdmissionSlice';


function Addmission() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [form,setForm]=useState({
        name:'',
        class:'',
        adm:'',
        age:'',
        pname:'',
        pNumber:'',
        pANumber:'',
        disability:'',
        disabilitYes:'',
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        // e.target.reset();
                 dispatch(createAdmission({...form, toast,navigate}))


     }

  return (
    <>
    <h2>Addimission Form</h2>
    
    <Form onSubmit={handleSubmit}  className='adm-forms'>
      <div className="adm-form">
<div className="adm-split">
      <Form.Group className="mb-3" >
        <Form.Label>Student Name</Form.Label>
        <Form.Control onChange={(e)=>setForm({...form,name:e.target.value})} type="text" placeholder="Enter Student Name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Class Being Admitted to</Form.Label>
        <Form.Control onChange={(e)=>setForm({...form,class:e.target.value})} type="text" placeholder="Enter Class Being Admitted" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Admission Number</Form.Label>
        <Form.Control onChange={(e)=>setForm({...form,adm:e.target.value})} type="text" placeholder="Enter Admission Number" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Student Age</Form.Label>
        <Form.Control onChange={(e)=>setForm({...form,age:e.target.value})} type="number" placeholder="Enter Students Age" />
      </Form.Group>
      </div>
      <div className="adm-split">
      <Form.Group className="mb-3" >
        <Form.Label>Guardians Name</Form.Label>
        <Form.Control onChange={(e)=>setForm({...form,pname:e.target.value})} type="text" placeholder="Enter Guardians Name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Guardians Phone Number</Form.Label>
        <Form.Control onChange={(e)=>setForm({...form,pNumber:e.target.value})} type="number" placeholder="Enter Guardians Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Alternative Number</Form.Label>
        <Form.Control onChange={(e)=>setForm({...form,pANumber:e.target.value})} type="number" placeholder="Enter Alternative Number" />
      </Form.Group>
      {/* <Form.Group className="mb-3" >
        <Form.Label>Student Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Students Age" />
      </Form.Group> */}

      <Form.Select onChange={(e)=>setForm({...form,disability:e.target.value})} className='select' aria-label="Floating label select example">
        <option>You have Disability</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
       
      </Form.Select>
      
      <Form.Group className="mb-3" >
        <Form.Label>If Yes name the Disabilty</Form.Label>
        <Form.Control onChange={(e)=>setForm({...form,disabilitYes:e.target.value})} type="text" placeholder="If Yes name the Disabilty" />
      </Form.Group>

      
    </div>
    </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Addmission;