import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createSummary } from '../../redux/features/summarySlice'

function Medicalform() {
  const dispatch=useDispatch()

  const[studenttokens,SetStudenttokens]=React.useState({
    name:"", id:"",sub:'',token:"",year:"", subject:""
  })
  function handlechange(event){
    SetStudenttokens(
    Prevstudenttokens=>{
      return{
        ...Prevstudenttokens,[event.target.name]:event.target.value
      }
    }
    )

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    // e.target.reset();
         if (studenttokens){
          const updateddata={...studenttokens}
         if(!id){
          dispatch(createSummary(updateddata,toast))
          // navigate('/student')
         }
         
         
         }
  }
  const {id}=useParams
  return (
    <div>
       <div className="general-form">
       <h4 style={{ color:  'rgb(255, 157, 0)'}}>Students Tokens</h4>
         <form onSubmit={handleSubmit}>
          
          <label htmlFor="name">Name</label>
       <input name='name' id='name' className='Minputs' placeholder='Name'
        onChange={handlechange}
        />

       

       <label htmlFor="id" >Id</label>
       <input type="text" name='id' placeholder='ID' className='Minputs' id='id' 
        onChange={handlechange}
        />

        <label htmlFor='token'>Token</label>
      <input name='token'  id='token' className='Minputs' 
       onChange={handlechange}
       />

        <label htmlFor="year" >Year</label>
      <input type="text" name='year' placeholder='Year' className='Minputs' id='year' 
       onChange={handlechange}
       />
        <label htmlFor="sub" >Subject</label>
      <input type="text" name='sub' placeholder='subject' className='Minputs' id='sub' 
       onChange={handlechange}
       />
        
       
      
                     
<button className="btn">
          Submit
        </button>

           
         
   
   </form>
    </div>
    <div className='btnclass'>
        <button>Back</button> 
        <button>Delete</button> 
        </div>
    </div>
  )
}

export default Medicalform