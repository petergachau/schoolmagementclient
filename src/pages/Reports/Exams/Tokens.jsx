import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const StudentsTokens = () => {
 
   

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
          const res= await axios.get(`http://localhost:5000/tokens`)
          
        res.data.sort(compare)
        setBooks(  res.data)
        
        console.log(books);
        } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])
    
  return (
    <div>
        {/* {books[0].cc==='5' ? ('class five'):''} */}
<Table  striped bordered hover variant="dark">
      <thead >
        {/* <div style={{width:'40rem',alignItems:'center', paddingLeft:'5rem'}}>
                <input  style={{width:'40rem',backgroundColor:'white',alignItems:'center',paddingLeft:'5rem'}} type="text" placeholder='search' />

        </div> */}

        <tr>
          <th>Name</th>
          <th>id</th>
          <th>Token</th>
          <th>Subject Champion</th>
          <th>Year</th>
          
          
          
        </tr>
      </thead>
      {books.map((book)=>{
        return(
            
    <>


        <tbody>
    <tr>
    
      <td>{book.name}</td>
      <td>{book.id}</td>
      <td>{book.token}</td>
      <td>{book.sub}</td>
      <td>{book.year}</td>
     

    </tr>
    </tbody>
   


        </>
        )
        

        
      })}
      
    </Table>
    </div>
  )
}



export default StudentsTokens