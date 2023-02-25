import React, { useState } from 'react'
import FileBase from "react-file-base64";

const LibRegistration = () => {

const [form,setForm]=useState({
  name:'',
  class:'',
  regNo:'',
 
  stream:'',
  date:'',
})


  return (
    <div className="general-form">
      <h4 style={{ color:  'rgb(255, 157, 0)'}}>Registration</h4>
      <form >
        
          <label htmlFor="">Name</label>
        <input type="text" placeholder='name' onChange={(e)=>setForm({...form,name:e.target.value})} className='Minputs' />
        
        <label htmlFor="">class</label>
        <input type="text" placeholder='class' onChange={(e)=>setForm({...form,class:e.target.value})} className='Minputs' />
        <label htmlFor="">reg number</label>
        <input type="text" placeholder='adsmission number' onChange={(e)=>setForm({...form,regNo:e.target.value})} className='Minputs' />
         <label htmlFor="" >stream</label>
        <input type="text" placeholder='stream' onChange={(e)=>setForm({...form,stream:e.target.value})} className='Minputs'  />
       
        
        <label htmlFor="">date</label>
        <input type="date"  onChange={(e)=>setForm({...form,date:e.target.value})}  className='Minputs' />
        <p>photo eg,png,jpeg</p>
      <FileBase
      style={{width:'100'}}
              type="file"
              placeholder='mpesa screenshot'
              multiple={false}
              onDone={({ base64 }) =>
                setForm({ ...form, imageFile: base64 })
              }
            />
        <button className="btn">
          Submit
        </button>
        
     
      </form>
    </div>
  )
}

export default LibRegistration