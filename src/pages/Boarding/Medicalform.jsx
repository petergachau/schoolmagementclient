import React from 'react'
import { useDispatch } from 'react-redux'
import FileBase from "react-file-base64";

import {toast} from 'react-toastify'
import { createMedical } from '../../redux/features/medicalSlice';
function Medicalform() {
  const dispatch=useDispatch()

  const[medicalform,setMedicalform]=React.useState({
    name:"",id:"",photo:"",class:"",illness:"",recommend:""
  })
  function handlechange(event){
    setMedicalform(
      Prevmedicalform=>{
        return{
          ...Prevmedicalform,[event.target.name]:event.target.value
        }
      }
    ) }
   

    const handleSubmit=(e)=>{
      e.preventDefault()
      // e.target.reset();
               dispatch(createMedical({...medicalform, toast}))
  
  
   }

  return (
    <div>
        <div className="general-form">
        <h4 style={{ color:  'rgb(255, 157, 0)'}}>Medical form</h4>
         <form onSubmit={handleSubmit} >
          
          <label htmlFor="name">Name</label>
       <input name='name' id='name' className='Minputs' placeholder='Name'
        onChange={handlechange}
        />

<FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                setMedicalform({ ...medicalform, photo: base64 })
                }
              />
         <label htmlFor="class" >class</label>
       <input type="text" name='class' placeholder='Class' className='Minputs' id='class' 
        onChange={handlechange}
        />

       <label htmlFor="id" >Id</label>
       <input type="text" name='id' placeholder='ID' className='Minputs' id='id' 
        onChange={handlechange}
        />
        
       
       <label htmlFor='illness' >Type of illness</label>
       <input name='illness'  type="text" id='ilness' className='Minputs'
        onChange={handlechange}
       />
       
           
       <label htmlFor='recommend'>Doctors recomendation</label>
       <input name='recommend' type="text"  id='date' className='Minputs'
        onChange={handlechange}
        /> 
             <button >Save</button>

   </form>
    </div>
   
    </div>
  )
}

export default Medicalform