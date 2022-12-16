import React from 'react'

const BorrowBook = () => {
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
   
   const handlesubmit=(event)=>{
     event.preventDefault()
     console.log(Borrowbookdata)
    
 
   }
  return (
    <div>
       <div className="general-form">
       <h4 style={{ color:  'rgb(255, 157, 0)'}}>Borrow Book</h4>
      <form>
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
        
        <label htmlFor="period" >Period</label>
        <input type="text" placeholder='Period' className='Minputs' id='period' name='period' 
         onChange={handlechange}
         value={Borrowbookdata.period}/>
         
        
       </form>
       </div>

       <div className='btnclass'>
        <button>Back</button> 
        <button>Delete</button> 
        <button onClick={handlesubmit}>Save</button>
        </div>

    </div>
  )
}

export default BorrowBook