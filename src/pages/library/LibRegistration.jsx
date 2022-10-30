import React, { useState } from 'react'

const LibRegistration = () => {

const [form,setForm]=useState({
  name:'',
  class:'',
  regNo:'',
  photo:'',
  stream:'',
  date:'',
})


  return (
    <div className="general-form">
      <h4 style={{backgroundColor:'orange'}}>Registration</h4>
      <form className="form-general">
        <div className="inputs">
          <label htmlFor="">Name</label>
        <input type="text" placeholder='name' onChange={(e)=>setForm({...form,name:e.target.value})} />
        </div>
        <div className="inputs"> <label htmlFor="">class</label>
        <input type="text" placeholder='class' onChange={(e)=>setForm({...form,class:e.target.value})}  /></div>
        <div className="inputs"><label htmlFor="">reg number</label>
        <input type="text" placeholder='adsmission number' onChange={(e)=>setForm({...form,regNo:e.target.value})}  /></div>
        <div className="inputs"><label htmlFor="">photo</label>
        <input type="text" placeholder='photo' onChange={(e)=>setForm({...form,photo:e.target.value})}  /></div>
        <div className="inputs">   <label htmlFor="" >stream</label>
        <input type="text" placeholder='stream' onChange={(e)=>setForm({...form,stream:e.target.value})}  /></div>
       
        <div className="inputs">
        <label htmlFor="">date</label>
        <input type="date"  onChange={(e)=>setForm({...form,date:e.target.value})}  /></div>
        <button className="btn">
          Submit
        </button>
        
     
      </form>
    </div>
  )
}

export default LibRegistration