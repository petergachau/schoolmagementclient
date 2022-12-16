import React from 'react'

function Exammarkentry() {

  const [exammarkentry,SetExammarkentry]=React.useState({
    name:"",class:"",id:"",math:"",english:"",kiswahili:"",science:"",social:""
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
  function handlesubmit(event){
    event.preventDefault()
    console.log(exammarkentry)
  }

  return (
    <div>
        <div className="general-form">
        <h4 style={{ color:  'rgb(255, 157, 0)'}}>Exam Mark Enrty</h4>
         <form >
          
          <label htmlFor="name">Name</label>
       <input name='name' id='name' className='Minputs' placeholder='Name'
        onChange={handlechange}
        />

        <label htmlFor="class" >class</label>
       <input type="text" name='class'  className='Minputs' id='class' 
        //onChange={handlechange}
        />

       <label htmlFor="id" >Id</label>
       <input type="text" name='id'  className='Minputs' id='id' 
        onChange={handlechange}
        />

        

        <label htmlFor="math" >math</label>
      <input type="text" name='math' className='Minputs' id='math' 
       onChange={handlechange}
       />

         <label htmlFor="english" >English</label>
      <input type="text" name='english' className='Minputs' id='english' 
       onChange={handlechange}
       />

         <label htmlFor="kiswahili" >Kiswahili</label>
      <input type="text" name='kiswahili' className='Minputs' id='kiswahili' 
       onChange={handlechange}
       />

         <label htmlFor="Science" >Science</label>
      <input type="text" name='science' className='Minputs' id='science' 
       onChange={handlechange}
       />
       
         <label htmlFor="social" >Social studies</label>
      <input type="text" name='social' className='Minputs' id='social' 
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

export default Exammarkentry