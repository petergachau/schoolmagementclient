import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createMessage } from '../../redux/features/messageSlice'

function Exammarkentry() {
  const dispatch=useDispatch()
  const [exammarkentry,SetExammarkentry]=React.useState({
    name:"",classs:"",id:"",math:"",cc:'',english:"",kiswahili:"",science:"",social:""
  })
  function handlechange(event){
    SetExammarkentry(
      setPrevexamentry=>{
        return{

        ...setPrevexamentry,[event.target.name]:event.target.value

        }
        }
    )
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    // e.target.reset();
         if (exammarkentry){
          const updateddata={...exammarkentry}
         if(!id){
          dispatch(createMessage(updateddata,toast))
          // navigate('/student')
         }
         
         
         }
  }
  const {id}=useParams
  return (
    <div>
        <div className="general-form">
        <h4 style={{ color:  'rgb(255, 157, 0)'}}>Exam Mark Enrty</h4>
         <form onSubmit={handleSubmit}>
          
          <label htmlFor="name">Name</label>
       <input name='name' id='name' className='Minputs' placeholder='Name'
        onChange={handlechange}
        />

<label htmlFor="math" >class</label>
      <input type="text" name='cc' className='Minputs' id='math' 
       onChange={handlechange}
       />

       <label htmlFor="id" >Id</label>
       <input type="text" name='id'  className='Minputs' id='id' 
        onChange={handlechange}
        />

        

        <label htmlFor="math" >math</label>
      <input type="number" name='math' className='Minputs' id='math' 
       onChange={handlechange}
       />

         <label htmlFor="english" >English</label>
      <input type="number" name='english' className='Minputs' id='english' 
       onChange={handlechange}
       />

         <label htmlFor="kiswahili" >Kiswahili</label>
      <input type="number" name='kiswahili' className='Minputs' id='kiswahili' 
       onChange={handlechange}
       />
 
         <label htmlFor="Science" >Science</label>
      <input type="number" name='science' className='Minputs' id='science' 
       onChange={handlechange}
       />
       
         <label htmlFor="social" >Social studies</label>
      <input type="number" name='social' className='Minputs' id='social' 
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

export default Exammarkentry