import React from 'react'
import { createIssues } from '../../redux/features/issuesSlice'
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux'
function Storeissues() {
  const dispatch=useDispatch()

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
   
   const handleSubmit=(e)=>{
    e.preventDefault()
    // e.target.reset();
             dispatch(createIssues({...Storeissuesdata, toast}))


 }
  
  return (
    <div>
       <div className="general-form">
       <h4 style={{ color:  'rgb(255, 157, 0)'}}>Store Issues</h4>
           <form onSubmit={handleSubmit} >
           <label htmlFor="itemdescription">Item Description</label>
        <input name='itemdescription' id='itemdescription' className='Minputs' placeholder='itemdescription'
         onChange={handlechange}
         value={Storeissuesdata.itemdescription}/>

        <label htmlFor='quantityissued'>Quantity Issued</label>
        <input name='quantitysupplied' placeholder='quantitysupplied' id='quantitysupplied' className='Minputs'
         onChange={handlechange}
         value={Storeissuesdata.quantitysupplied}/>

        <label htmlFor="dateofissue" >Date</label>
        <input type="date" name='dateofissue' placeholder='Date of issue' className='Minputs' id='dateofissue' 
         onChange={handlechange}
         value={Storeissuesdata.dateofissue}/>

        <label htmlFor='receivingofficer'>Recieving Officer</label>
        <input name='receivingofficer' placeholder='Receiving officer' id='receivingofficer' className='Minputs'
         onChange={handlechange}
         value={Storeissuesdata.receivingofficer}/>
            
        <label htmlFor='issuingofficer'>Issuing Officer</label>
        <input name='issuingofficer' placeholder='Issuing officer' id='sissuingofficer' className='Minputs'
         onChange={handlechange}
         value={Storeissuesdata.issuingofficer}/> 

      <button >Save</button>
    </form>
    </div>
   
    </div>
  )
}

export default Storeissues