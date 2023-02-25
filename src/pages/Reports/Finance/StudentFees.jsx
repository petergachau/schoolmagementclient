import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import moment from 'moment'
const StudentFees = () => {
  function compare(a,b){
    if(a._id <b._id){
      return 1
    }
    if(a._id >b._id){
      return -1
    }return 0
  }

  const [books,setBooks]=useState([])

  useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get(`http://localhost:5000/project`)
      
    res.data.sort(compare)
    setBooks(  res.data)
    
  
    } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
      },[])
      const [query,setQuery]=useState('')


      const [expense,setExpenses]=useState([])

      useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get(`http://localhost:5000/stats/totalexpenses`)
          res.data.sort(compare)
          const result = res.data.filter((_, index) => index < 3);

       
        setExpenses( result)
        
        } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])
    
          const rows =  [
        
          
            {
             
              digits:expense[0]?._id,
            
             
            },
          ]   
          // <th>{moment().month()+1} </th>
          // <th>{expense[0]?._id} </th>
  return (
    <>
    <div style={{width:'100%' ,padding:'1rem'}}>
      <input style={{textAlign:'center',width:'60%',alignItems:'center',borderRadius:'0.5rem'}}
       type="text" 
        placeholder='search by addmission number'
        onChange={(e)=>setQuery(e.target.value)} />
    </div>
   
    <Table  striped bordered hover variant="dark">
      <thead >
        {/* <div style={{width:'40rem',alignItems:'center', paddingLeft:'5rem'}}>
                <input  style={{width:'40rem',backgroundColor:'white',alignItems:'center',paddingLeft:'5rem'}} type="text" placeholder='search' />

        </div> */}

        <tr>
          <th>#</th> 
          {/* <th>{moment().format("MMM"+"MMM"+"MMM") }</th> */}
        
          <th>Students Name</th>
          <th>Students Addm Number</th>
          <th>Student Class</th>
          <th>Term</th>
          <th>Termly Amount</th>
        </tr>
      </thead>
     {/* {moment(book.createdAt).month()+1 === expense[0]?._id ? <>  */}
     {/* {books.filter((user)=>user.title.toLowerCase().includes(query)).map((book)=>{ */}
{books.map((book)=>{

        return(
          <tbody>
            {moment(book.createdAt).month()+1 === expense[0]?._id  ||  expense[0]?._id +1   ||  expense[0]?._id +2  ? (
              <>
              <tr>
             {/* <td>{moment(books.createdAt).month()+1}</td> */}
           <td>*</td>  
           
              <td>{book.name}</td>
              <td>{book.regNo}</td>
              <td>{book.class}</td>
              <td>{book.term}</td>
              <td>{book.fees}</td>
            </tr>
              </>
            ) :''}

            
            </tbody>
        )
      })}
    {/* </>:'hello'}  */}
      
      <tr>
        <th>Total</th>
      </tr>
      {/* {expense.map((i)=>{ */}
        {/* return( */}
          <tbody>
        <td>Total Fees:{expense[0]?.total+expense[1]?.total+expense[2]?.total} </td>
      </tbody>  
        {/* )
        
      })} */}
      
    </Table>
    </>

  )
}

export default StudentFees