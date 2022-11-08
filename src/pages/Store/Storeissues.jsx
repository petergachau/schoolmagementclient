import React from 'react'

function Storeissues() {
  const[Storeissuesdata,setStoreissuesdata]=React.useState({
    itemdescription:"",quantitysupplied:"",dateofissue:"",receivingofficer:"",issuingofficer:""
   })
   function handlechange(event){
     setStoreissuesdata(
       prevStoreissuesdata=>{
         return{
           ...prevStoreissuesdata,[event.target.name]:event.target.value
         }
       }
     )
   }
   
   const handlesubmit=(event)=>{
     event.preventDefault()
     console.log(Storeissuesdata)
    
 
   }
  return (
    <div>
       <div className="general-form">
           <form >
           <label htmlFor="itemdescription">Book id</label>
        <input name='itemdescription' id='itemdescription' className='Minputs' placeholder='itemdescription'
         onChange={handlechange}
         value={Storeissuesdata.itemdescription}/>

        <label htmlFor='quantityissued'>Pupils ID</label>
        <input name='quantitysupplied' placeholder='quantitysupplied' id='quantitysupplied' className='Minputs'
         onChange={handlechange}
         value={Storeissuesdata.quantitysupplied}/>

        <label htmlFor="dateofissue" >Book title</label>
        <input type="text" name='dateofissue' placeholder='Date of issue' className='Minputs' id='dateofissue' 
         onChange={handlechange}
         value={Storeissuesdata.dateofissue}/>

        <label htmlFor='receivingofficer'>Author</label>
        <input name='receivingofficer' placeholder='Receiving officer' id='receivingofficer' className='Minputs'
         onChange={handlechange}
         value={Storeissuesdata.receivingofficer}/>
            
        <label htmlFor='issuingofficer'>Author</label>
        <input name='issuingofficer' placeholder='Issuing officer' id='sissuingofficer' className='Minputs'
         onChange={handlechange}
         value={Storeissuesdata.issuingofficer}/> 

        <button>Back</button> 
    <button>Delete</button> 
    <button  onClick={handlesubmit}>Save</button>
    </form>
    </div>
    </div>
  )
}

export default Storeissues