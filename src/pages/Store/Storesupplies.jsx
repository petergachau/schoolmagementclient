import React from 'react'

function Storesupplies() {
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
   
   const handlesubmit=(event)=>{
     event.preventDefault()
     console.log(Storesuppliesdata)
    
 
   }
  return (
    <div>
       <div className="general-form">
         <label htmlFor="itemdescription">Book id</label>
        <input name='itemdescription' id='itemdescription' className='Minputs' placeholder='itemdescription'
        onChange={handlechange}
        value={Storesuppliesdata.itemdescription}/>

        <label htmlFor='quantitysupplied'>Pupils ID</label>
        <input name='quantitysupplied' placeholder='quantitysupplied' id='quantitysupplied' className='Minputs'
        onChange={handlechange}
        value={Storesuppliesdata.quantitysupplied}/>

        <label htmlFor="date" >Book title</label>
        <input type="text" name='date' placeholder='date' className='date' id='date'
        onChange={handlechange} 
        value={Storesuppliesdata.date}/>

        <label htmlFor='suppliername'>Author</label>
        <input name='suppliername' placeholder='suppliername' id='suppliername' className='Minputs'
        onChange={handlechange}
        value={Storesuppliesdata.suppliername}/>

        <button>Back</button> 
    <button>Delete</button> 
    <button onClick={handlesubmit}>Save</button>
    </div>
    </div>
  )
}

export default Storesupplies