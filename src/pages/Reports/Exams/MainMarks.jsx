import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MainMarks = () => {
  return (
    <div style={{
        width:'100%',
        display:'flex',
        fleDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
    justifyContent:'center',
    gap:'30%',
    marginTop:'17%'
}}>
<div>
    <Link to='/examsreport'>
        <Button className="btn">
     Marks Entry
    </Button>  
    </Link>
  

</div>
<div>
<Link to='/tokens'>
        <Button className="btn">
        Students Tokens
    </Button>  
    </Link> 
    
</div>

</div>
  )
}

export default MainMarks