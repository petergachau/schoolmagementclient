import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const booked=[
  {
    bookid: 'Book 1',
    isnNumber: 'Description of the book',
    title: '1.00',
    total: '1.00',
    
  },
  {
    bookid: 'Book 1',
    isnNumber: 'Description of the book',
    title: '1.00',
    total: '1.00',
    
  },
  {
    bookid: 'Book 1',
    isnNumber: 'Description of the book',
    title: '1.00',
    total: '1.00',
    
  },
  {
    bookid: 'Book 1',
    isnNumber: 'Description of the book',
    title: '1.00',
    total: '1.00',
    
  },
  {
    bookid: 'Book 1',
    isnNumber: 'Description of the book',
    title: '1.00',
    total: '1.00',
    
  },
]

function BooksIn() {

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
      const res= await axios.get(`http://localhost:5000/booksin`)
      
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
    <Table  striped bordered hover variant="dark">
      <thead >
        {/* <div style={{width:'40rem',alignItems:'center', paddingLeft:'5rem'}}>
                <input  style={{width:'40rem',backgroundColor:'white',alignItems:'center',paddingLeft:'5rem'}} type="text" placeholder='search' />

        </div> */}

        <tr>
          <th>#</th> 
          <th>Books Id</th>
          <th>ISNB NUMBER</th>
          <th>Books Title</th>
          <th>Total Books</th>
          
        </tr>
      </thead>
      {books.map((book)=>{
        return(
          <tbody>
            <tr>
           <td>*</td> 
              <td>{book.bookId}</td>
              <td>{book.ISNB}</td>
              <td>{book.bookTitle}</td>
              <td>{book.total}</td>
            </tr>
            </tbody>
        )
      })}
      
    </Table>
  );
}

export default BooksIn;