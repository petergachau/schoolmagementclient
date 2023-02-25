import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const Exams = () => {

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
          const res= await axios.get(`http://localhost:5000/examreg`)
          
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
          <th>class</th> 
          <th>Name</th>
          <th>id</th>
          <th>maths</th>
          <th>English</th>
          <th>Kiswahili</th>
          <th>Science</th>
          <th>Social/Cre</th>
          <th>Total Marks</th>
         
        </tr>
      </thead>
      {books.map((book)=>{
        return(
            
    <>

{book.cc==='1' ? (
        <tbody>
    <tr>
    <td>{book.cc}</td>
      <td>{book.name}</td>
      <td>{book.id}</td>
      <td>{book.math}</td>
      <td>{book.english}</td>
      <td>{book.kiswahili}</td>
      <td>{book.science}</td>
      <td>{book.social}</td>
      <td>{book.math+book.science+book.english+book.kiswahili+book.social}</td>


    </tr>
    </tbody>
    ):''}
{book.cc==='2' ? (
        <tbody>
    <tr>
    <td>{book.cc}</td>
      <td>{book.name}</td>
      <td>{book.id}</td>
      <td>{book.math}</td>
      <td>{book.english}</td>
      <td>{book.kiswahili}</td>
      <td>{book.science}</td>
      <td>{book.social}</td>
      <td>{book.math+book.science+book.english+book.kiswahili+book.social}</td>


    </tr>
    </tbody>
    ):''}

{book.cc==='3' ? (
        <tbody>
    <tr>
    <td>{book.cc}</td>
      <td>{book.name}</td>
      <td>{book.id}</td>
      <td>{book.math}</td>
      <td>{book.english}</td>
      <td>{book.kiswahili}</td>
      <td>{book.science}</td>
      <td>{book.social}</td>
      <td>{book.math+book.science+book.english+book.kiswahili+book.social}</td>


    </tr>
    </tbody>
    ):''}

{book.cc==='4' ? (
        <tbody>
    <tr>
    <td>{book.cc}</td>
      <td>{book.name}</td>
      <td>{book.id}</td>
      <td>{book.math}</td>
      <td>{book.english}</td>
      <td>{book.kiswahili}</td>
      <td>{book.science}</td>
      <td>{book.social}</td>
      
      <td>{book.math+book.science+book.english+book.kiswahili+book.social}</td>

    </tr>
    </tbody>
    ):''}



    {book.cc==='5' ? (
        <tbody>
    <tr>
    <td>{book.cc}</td>
      <td>{book.name}</td>
      <td>{book.id}</td>
      <td>{book.math}</td>
      <td>{book.english}</td>
      <td>{book.kiswahili}</td>
      <td>{book.science}</td>
      <td>{book.social}</td>
      <td>{book.math+book.science+book.english+book.kiswahili+book.social}</td>


    </tr>
    </tbody>
    ):''}
    
  {book.cc==='6' ? (
        <tbody>
    <tr>
    <td>{book.cc}</td>
      <td>{book.name}</td>
      <td>{book.id}</td>
      <td>{book.math}</td>
      <td>{book.english}</td>
      <td>{book.kiswahili}</td>
      <td>{book.science}</td>
      <td>{book.social}</td>
      <td>{book.math+book.science+book.english+book.kiswahili+book.social}</td>


    </tr>
    </tbody>
    ):''}


{book.cc==='7' ? (
        <tbody>
    <tr>
    <td>{book.cc}</td>
      <td>{book.name}</td>
      <td>{book.id}</td>
      <td>{book.math}</td>
      <td>{book.english}</td>
      <td>{book.kiswahili}</td>
      <td>{book.science}</td>
      <td>{book.social}</td>
      <td>{book.math+book.science+book.english+book.kiswahili+book.social}</td>
 

    </tr>
    </tbody>
    ):''}


{book.cc==='8' ? (
        <tbody>
    <tr>
    <td>{book.cc}</td>
      <td>{book.name}</td>
      <td>{book.id}</td>
      <td>{book.math}</td>
      <td>{book.english}</td>
      <td>{book.kiswahili}</td>
      <td>{book.science}</td>
      <td>{book.social}</td>
      
      <td>{book.math+book.science+book.english+book.kiswahili+book.social}</td>
    </tr>
    </tbody>
    ):''}
     

        </>
        )
        

        
      })}
      
    </Table>
    </div>
  )
}

export default Exams