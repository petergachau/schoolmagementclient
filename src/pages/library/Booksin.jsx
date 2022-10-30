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
      <h4>Books In</h4>
      <form className="form-general">
        <div className="inputs">
          <label htmlFor="">Book id</label>
        <input type="text" placeholder='books id' onChange={(e)=>setForm({...form,bookid:e.target.value})} />
        </div>
        <div className="inputs"> <label htmlFor="">ISNB Number</label>
        <input type="text" placeholder='ISNB Number' onChange={(e)=>setForm({...form,ISNB:e.target.value})}  /></div>
        <div className="inputs"><label htmlFor="">Book Title</label>
        <input type="text" placeholder='Book Title' onChange={(e)=>setForm({...form,Bookitle:e.target.value})}  /></div>
        <div className="inputs"><label htmlFor="">Total Books</label>
        <input type="number" placeholder='total books' onChange={(e)=>setForm({...form,totalBooks:e.target.value})}  /></div>
        
        <button className="btn">
          Submit
        </button>
        
     
      </form>
    </div>
  )
}

export default LibRegistration