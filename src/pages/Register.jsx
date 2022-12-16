import React from 'react'

const Register = () => {
  const[Formdata,setFormdata]=React.useState({
    name:"",email:"",password:"",confirmpassword:""
   })
   function handlechange(event){
     setFormdata(
       prevFormdata=>{
         return{
           ...prevFormdata,[event.target.name]:event.target.value
         }
       }
     )
   }
   // console.log(Formdata)
   const handlesubmit=(event)=>{
     event.preventDefault()
     
    //  console.log(Formdata)
 
   }



  return (
    <div>
      <form id='regform' onSubmit={handlesubmit}>
      <h4 className='headerform'>Register</h4>
      
       
      <input className='reginputs' placeholder='Name' name='name' id='regname'
      onChange={handlechange}/>
      
     
      <input className='reginputs' placeholder='Email' name='email' id='regemail'
      onChange={handlechange}/>
      
      
        <input className='reginputs' placeholder='Password' name='password' id='regpassword'
        onChange={handlechange}
        />

       
        <input className='reginputs' placeholder='confirm password' name='confirmpassword' id='regconfpassword'
        onChange={handlechange}/>
        <button className='regbtn'>Register</button>
        {/* <p><Link to="/Forgotpassword" >Forgot password</Link></p> */}
        </form>
        
    </div>
  )
}

export default Register