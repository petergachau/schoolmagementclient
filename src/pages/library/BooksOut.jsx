import React from 'react'

const BooksOut = () => {
  const[Booksoutdata,setBooksoutdata]=React.useState({
    stdname:"",pupilid:"",booktitle:"", author:"", date:""
   })
   function handlechange(event){
     setBooksoutdata(
       prevBooksoutdata=>{
         return{
           ...prevBooksoutdata,[event.target.name]:event.target.value
         }
       }
     )
   }
    console.log(Booksoutdata)
   const handlesubmit=(event)=>{
     event.preventDefault()
     console.log(Booksoutdata)
 
   }
  return (
    <div>
       <div className="general-form">
       <h4 style={{ color:  'rgb(255, 157, 0)'}}>Books out</h4>
       <form>
        <label htmlFor="stdname">Student Name</label>
        <input name='stdname' id='stdname' className='Minputs' placeholder='Student name'
         onChange={handlechange}
         value={Booksoutdata.stdname}/>
        <label htmlFor='pupilid'>Pupils ID</label>
        <input name='pupilid' placeholder='Pupils name' id='pupilid' className='Minputs'
        onChange={handlechange}
        value={Booksoutdata.pupilid}/>
        <label htmlFor="booktitle" >Book title</label>
        <input type="text" placeholder='Book title' name='booktitle' className='Minputs' id='booktitle'
        onChange={handlechange}
        value={Booksoutdata.booktitle} />
        <label htmlFor='author'>Author</label>
        <input name='author' placeholder='Author' id='author' className='Minputs'
        onChange={handlechange}
        value={Booksoutdata.author} />
        <label htmlFor="date" >Date</label>
        <input type="date" placeholder='Date'  className='Minputs' id='date' name='date'
        onChange={handlechange}
        value={Booksoutdata.date} />

       

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

export default BooksOut