import React from 'react'

function Medicalform() {
  const[medicalform,SetMedicalform]=React.useState({
    name:"",id:"",photo:"",class:"",illness:"",recommend:""
  })
  function handlechange(event){
    SetMedicalform(
      Prevmedicalform=>{
        return{
          ...Prevmedicalform,[event.target.name]:event.target.value
        }
      }
    ) }
    function handlesubmit(event){
     event.preventDefault()
     console.log(medicalform)
    }
  return (
    <div>
        <div className="general-form">
        <h4 style={{ color:  'rgb(255, 157, 0)'}}>Medical form</h4>
         <form >
          
          <label htmlFor="name">Name</label>
       <input name='name' id='name' className='Minputs' placeholder='Name'
        onChange={handlechange}
        />

       <label htmlFor='photo'>Photo</label>
      
       <input name='photo' type="file" id='photo' className='photoinput'
        onChange={handlechange}
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

export default Medicalform