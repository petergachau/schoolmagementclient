import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createVacation } from '../../redux/api'
import { createBorrow } from '../../redux/features/Borrow'

const BorrowBook = () => {
  const dispatch=useDispatch()
  const[Borrowbookdata,setBorrowbookdata]=React.useState({
    bookid:"",isnbno:"",booktitle:"",author:"",period:"",date:""
   })
   function handlechange(event){
     setBorrowbookdata(
       prevBorrowbookdata=>{
         return{
           ...prevBorrowbookdata,[event.target.name]:event.target.value
         }
       }
     )
   }
   
   const handleSubmit=(e)=>{
    e.preventDefault()
    e.target.reset();
         if (Borrowbookdata){
          const updateddata={...Borrowbookdata}
         if(!id){
          dispatch(createBorrow(updateddata,toast))
          // navigate('/student')
         }
         
         
         }
  }
  const {id}=useParams
  return (
    <div>
       <div className="general-form">
       <h4 style={{ color:  'rgb(255, 157, 0)'}}>Borrow Book</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookid">Book id</label>
        <input name='bookid' id='bookid' className='Minputs' placeholder='Bookid'
         onChange={handlechange}
         value={Borrowbookdata.bookid}/>

        <label htmlFor='isnbno'>Pupils ID</label>
        <input name='isnbno' placeholder='Isnb No' id='isnbno' className='Minputs'
         onChange={handlechange}
         value={Borrowbookdata.isnbno}/>

        <label htmlFor="booktitle" >Book title</label>
        <input type="text" name='booktitle' placeholder='Book title' className='Minputs' id='booktitle' 
         onChange={handlechange}
         value={Borrowbookdata.booktitle}/>

        <label htmlFor='author'>Author</label>
        <input name='author' placeholder='Author' id='author' className='Minputs'
         onChange={handlechange}
         value={Borrowbookdata.author}/>

        <label htmlFor="date" >Date</label>
        <input type="date" placeholder='Date' className='Minputs' id='date' name='date' 
         onChange={handlechange}
         value={Borrowbookdata.date}/>
        
        <label htmlFor="period in days" >Period</label>
        <input type="number" placeholder='Period in days' className='Minputs' id='period' name='period' 
         onChange={handlechange}
         value={Borrowbookdata.period}/>
         
       <button>Submit</button>

       </form>
       </div>

       

    </div>
  )
}

export default BorrowBook