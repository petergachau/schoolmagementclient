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
       <label htmlFor="email">Name</label>
       
      <input className='reginputs' placeholder='Name' name='name' id='regname'
      onChange={handlechange}/>
      
      <label htmlFor="email">Email</label>
      <input className='reginputs' placeholder='Email' name='email' id='regemail'
      onChange={handlechange}/>
      
      <label htmlFor="password">Password</label>
        <input className='reginputs' placeholder='Password' name='password' id='regpassword'
        onChange={handlechange}
        />

        <label htmlFor="regconfpassword">ConfirmPassword</label>
        <input className='reginputs' placeholder='confirm password' name='confirmpassword' id='regconfpassword'
        onChange={handlechange}/>
        <button className='regbtn'>Register</button>
        {/* <p><Link to="/Forgotpassword" >Forgot password</Link></p> */}
        </form>
        
    </div>
  )
}

export default Register