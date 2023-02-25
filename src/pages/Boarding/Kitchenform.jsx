import React from 'react'
import { useDispatch } from 'react-redux'
import FileBase from "react-file-base64";

import { createBoarding } from '../../redux/features/boarding'
import {toast} from 'react-toastify'
function Kitchenform() {
  const dispatch=useDispatch()
  const[KitchenForm,setKitchenform]=React.useState({
    
    name:"",photo:"",id:"",served:true
   })
   
   function handlechange(event){
    const{name,type,value,checked}= event.target
     setKitchenform(
       prevkitchenform=>{
         return{
           ...prevkitchenform,
           [name]: type === "checkbox" ? checked:value
         }
       }
     )
   }
  
   const handleSubmit=(e)=>{
    e.preventDefault()
    // e.target.reset();
             dispatch(createBoarding({...KitchenForm, toast}))


 }
  
  return (
    
       
    <div>
        <div  onSubmit={handleSubmit} className="general-form">
        <h4 style={{ color:  'rgb(255, 157, 0)'}}>Kitchen Form</h4>
        <form >
          
           <label htmlFor="name">Name</label>
        <input type="text" name='name' id='name' className='Minputs' placeholder='Name'
         onChange={handlechange}
         />

       
             <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                setKitchenform({ ...KitchenForm, photo: base64 })
                }
              />
        <label htmlFor="id" >Id</label>
        <input type="text" name='id' placeholder='ID' className='Minputs' id='id' 
         onChange={handlechange}
         />
         
        <div className='checkboxes'>
        <label htmlFor='served' className='checklabel'>Served</label>
        <input name='served'  type="checkbox" id='served' className='checkbox' checked={KitchenForm.served}
         onChange={handlechange}
        />
        </div>
            
        <label htmlFor='date'>Date</label>
        <input name='date' type="date"  id='date' className='Minputs'
         onChange={handlechange}
         /> 
               <button >Save</button>

    
    </form>
    </div>
    
    </div>
  )
}

export default Kitchenform