import React from 'react'

function Medicalform() {
  const[studenttokens,SetStudenttokens]=React.useState({
    name:"", id:"",token:"",year:"",subjectchampion:""
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
  function handlesubmit(event)
  {
  event.preventDefault()
  console.log(studenttokens)
  }
  return (
    <div>
       <div className="general-form">
       <h4 style={{ color:  'rgb(255, 157, 0)'}}>Students Tokens</h4>
         <form >
          
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
        
       
       <label htmlFor='subjectchampion' >Subject Champion</label>
       <input name='subjectchampion' type="text" id='subjectchampion' className='Minputs'
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