import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import {info} from './Information/Info';

const Queries = () => {
  // const information=info.Items.map(student=>{
  //   var names=student.id
  //   var id =student.id
  //   var amount=student.amount
  // })
  const[infos,setInfo]=useState(info)
  console.log(infos)
  return (
    <div>
      hello
      
    
      {/* {Info.map(student=>student.name)} */}

    </div>
  )
}

export default Queries