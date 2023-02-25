import React from 'react'
import { useDispatch } from 'react-redux'
import { createSupplies } from '../../redux/features/suppliesSlice'
import {toast} from 'react-toastify'

function Storesupplies() {
  const dispatch=useDispatch()

  const[Storesuppliesdata,setStoresuppliesdata]=React.useState({
    itemdescription:"",quantitysupplied:"",date:"",suppliername:""
   })
   function handlechange(event){
     setStoresuppliesdata(
       prevStoresuppliesdata=>{
         return{
           ...prevStoresuppliesdata,[event.target.name]:event.target.value
         }
       }
     )
   }
   
   const handleSubmit=(e)=>{
    e.preventDefault()
    // e.target.reset();
             dispatch(createSupplies({...Storesuppliesdata, toast}))


 }

  return (
    <div>
       <div className="general-form">
       <h4 style={{ color:  'rgb(255, 157, 0)'}}>Store Supplies</h4>
        <form onSubmit={handleSubmit} >
         <label htmlFor="itemdescription">Item Descriptio</label>
        <input name='itemdescription' id='itemdescription' className='Minputs' placeholder='itemdescription'
        onChange={handlechange}
        value={Storesuppliesdata.itemdescription}/>

        <label htmlFor='quantitysupplied'>Quantity Supplied</label>
        <input name='quantitysupplied' placeholder='quantitysupplied' id='quantitysupplied' className='Minputs'
        onChange={handlechange}
        value={Storesuppliesdata.quantitysupplied}/>

        <label htmlFor="date" >Date</label>
        <input type="date" name='date' placeholder='date' className='Minputs'  id='date' 
        onChange={handlechange} 
        value={Storesuppliesdata.date}/>

        <label htmlFor='suppliername'>Supplier Name</label>
        <input name='suppliername' placeholder='suppliername' id='suppliername' className='Minputs'
        onChange={handlechange}
        value={Storesuppliesdata.suppliername}/>
        <button >Save</button>

     
    </form>
    </div>
   
    </div>
  )
}

export default Storesupplies