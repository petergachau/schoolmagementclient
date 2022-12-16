import React from 'react'

const Login = () => {
  const[Formdata,setFormdata]=React.useState({
   email:"",password:""
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
    console.log(Formdata)

  }
  return (
    <div >
      
      <form id='loginform' onSubmit={handlesubmit}>
      <h4 className='headerform'>Login</h4>
        <input className='loginputs' type='email' placeholder='Email' name='email' id='loginemail'
        onChange={handlechange}
        value={Formdata.email}/>
        <input className='loginputs' type="password" placeholder='Password' name='password' id='loginpassword'
        onChange={handlechange}
        value={Formdata.password}/>
        <button className='loginbtn'>
          Login
        </button>

      </form>
    </div>
  )
}

export default Login