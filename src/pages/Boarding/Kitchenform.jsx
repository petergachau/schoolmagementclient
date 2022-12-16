import React from 'react'

function Kitchenform() {
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
   
   const handlesubmit=(event)=>{
     event.preventDefault()
     console.log(KitchenForm)
    
 
   }
  return (
    
       
    <div>
        <div className="general-form">
        <h4 style={{ color:  'rgb(255, 157, 0)'}}>Kitchen Form</h4>
        <form >
          
           <label htmlFor="name">Name</label>
        <input type="text" name='name' id='name' className='Minputs' placeholder='Name'
         onChange={handlechange}
         />

        <label htmlFor='photo'>Photo</label>
       
        <input name='photo' type="file" id='photo' className='photoinput'
         onChange={handlechange}
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
       
    
    </form>
    </div>
    <div className='btnclass'>
        <button>Back</button> 
        <button>Delete</button> 
        <button onClick={handlesubmit}>Save</button>
        </div>
    </div>
  )
}

export default Kitchenform