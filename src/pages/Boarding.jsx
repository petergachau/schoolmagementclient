import React from 'react'
import { Link } from 'react-router-dom'
import Kitchenform from './Boarding/Kitchenform'

const Boarding = () => {
  return (
    <div className='btnpage'>
       <button ><Link  to='/Kitchenform' className="linklink">KitchenForm</Link></button>
       <button ><Link  to='/Medicalform' className="linklink">MedicalForm</Link></button>
      
    </div>
  )
}

export default Boarding