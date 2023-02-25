import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Finance from './Finance'
import Login from './Login'
const Main = () => {
  const navigate=useNavigate()

  const {user}=useSelector((state)=>({...state.auth}))
  const userId =user?.result?._id


if(user?.result?.location==='Accountant'){
 return  navigate('/finance')
}
if(user?.result?.location==='Librarian'){
  return  navigate('/library')
 }
 if(user?.result?.location==='Store'){
  return  navigate('/store')
 }
 if(user?.result?.location==='Registrar'){
  return  navigate('/admission')
 }
 if(user?.result?.location==='Matron'){
  return  navigate('/boarding')
 }




 if(user?.result?.location==='Admin'){
  



  return (
    <>

{/* {user?.result?._id ? navigate('/'):navigate('/login') } */}
  <h2 style={{color:'black'}}>School Management System</h2>

<Card style={{margin:'2rem',paddingBottom:'1rem' }}>
  {user?.result?.isAdmin}
    <main className="main">
     
        <div className="buttons1">
         
            
        <Link  to='/admission'className='link' >
            <Button className="btn">  Admission</Button>
              </Link>
            <Link  to='/library'className='link' >
            <Button className="btn">  Library Department</Button>
              </Link>
              <Link  to='/finance' className='link' >
            <Button className="btn">  Finance Department</Button>
              </Link>
              <Link  to='/store'className='link' >
            <Button className="btn">  Store Department</Button>
              </Link>
        
        </div>
       <div className="buttons2">
        <Link  to='/exam'className='link' >
            <Button className="btn"> Exams Department</Button>
              </Link>
              <Link  to='/allreports' className='link' >
            <Button className="btn">All Reports</Button>
              </Link>
              <Link  to='/boarding'className='link' >
            <Button className="btn">Boarding Department</Button>
              </Link>
              <Link  to='/boarding'className='link' >
            <Button className="btn">Comments</Button>
              </Link>
        </div>
       </main>
    </Card>
    </>
  )
}else{
  return(
    <Login/>
  )
  
}
}

export default Main