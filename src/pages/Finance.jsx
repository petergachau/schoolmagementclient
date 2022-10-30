import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Finance = () => {

  const [users,setUsers]=useState([]);
  const [fees,setFees]=useState([]);
  const [boarding,setBoarding]=useState([]);
  const [library,setLibrary]=useState([]);
  const [stuffs,setStuffs]=useState([]);
      useEffect(()=>{
          async function fetchData(){
          try {
            const res= await axios.get('http://localhost:5000/stats/totalclinic')
            setUsers(  res.data)
            console.log('clinic',users);
           } catch (error) {
            console.log(error);
            
          }
          }
          fetchData()
            },[])
            useEffect(()=>{
              async function fetchData(){
              try {
                const res= await axios.get('http://localhost:5000/stats/totalexpenses')
                setFees( res.data)
                console.log('clinic',users);
               } catch (error) {
                console.log(error);
                
              }
              }
              fetchData()
                },[])
                useEffect(()=>{
                  async function fetchData(){
                  try {
                    const res= await axios.get('http://localhost:5000/stats/totalboarding')
                    setBoarding( res.data)
                    console.log('clinic',users);
                   } catch (error) {
                    console.log(error);
                    
                  }
                  }
                  fetchData()
                    },[])
                    useEffect(()=>{
                      async function fetchData(){
                      try {
                        const res= await axios.get('http://localhost:5000/stats/totallibrary')
                        setLibrary( res.data)
                        console.log('clinic',users);
                       } catch (error) {
                        console.log(error);
                        
                      }
                      }
                      fetchData()
                        },[])

                        useEffect(()=>{
                          async function fetchData(){
                          try {
                            const res= await axios.get('http://localhost:5000/stats/totalstaffs')
                            setStuffs( res.data)
                            console.log('clinic',users);
                           } catch (error) {
                            console.log(error);
                            
                          }
                          }
                          fetchData()
                            },[])

  return (
    <>
  
<main className="mainFinanace">
    <h3>SMS Finance Department</h3>
    <div className="top-levels">
        <button className="btn">
            <Link className='link' to='/studentfees'>
              Students Fees  
            </Link>
            </button>
        <button className="btn">
        <Link className='link' to='/clinic'>
              School Clinic Dpt  
                </Link>
            </button>
        <button className="btn">
        <Link className='link' to='/procurement'>
             Procurement  
                </Link> 
            </button>
    </div>
    <div className="lower-levels">
    <button className="btn">
    <Link className='link' to='/boardingdpt'>
             Students Boarding Dpt 
                </Link>
        </button>
    <button className="btn">
    <Link className='link' to='/libraydpt'>
            Library Dpt  
                </Link>
        </button>
    <button className="btn">
    <Link  className='link' to='/staffworkers'>
               Staffs and Workers
                </Link>
        </button>
    </div>
</main>
<hr />
<div className="totalexpense">
  

<h2>Finance Summary</h2>
 
 

  



 
  
  
{library.map((ib)=>{
  return(
    <>

{fees.map((i)=>{
  return(
    <>
   <h3>Total fees : {i.total} </h3>
 

{boarding.map((id)=>{
  return(
    <>
    <h3>Total budget for bording Dpt: {id.total+id.total2}</h3>
 

{users.map((user)=>{
  return(
   <>
      <h3> total budget for school clinic: {user.total+user.total2}</h3>
    
 


    <h3>Total Library Budget: {ib.total+ib.total2}</h3>
  

  
  
  {stuffs.map((ia)=>{
  return(
    <>
    <h3>Total Stuffs and workers Budget: {ia.total}</h3>
Monthly Revenue: {i.total-ia.total+ib.total+ib.total2+user.total+user.total2+id.total+id.total2}
 </>   
  )
})}
</> )
})}
</> )
})}

</> 
)
})}</>)})}
  
</div>
</>
  )
}

export default Finance