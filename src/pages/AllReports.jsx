import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AllReports = () => {
  return (
    <>
    <h2>All Reports</h2>
    
    <div className='all-reports'>
      <div className="reports-split">
        <div>
          <Link to='/booksin'>
             <Button className='btn'>
  Library Reports
</Button>
          </Link>
         
        </div>
      <Link to='/mainstore'>
      <Button className='btn'>
  Store Reports
</Button>
        </Link> 

<Link to='/mainfinance'>
  <Button className='btn'>
  Finance Reports
</Button> 
</Link>

      </div>
      <div className="reports-split">
        <Link to='/mainmarks'>
          <Button className='btn'>
  Exams Reports
</Button>
        </Link>
      <Link to='/mainboarding'>
       <Button className='btn'>
  Boarding Reports
</Button> 
      </Link>

<Link to='/admissionreport'>
  <Button className='btn'>
 Students Admission
</Button>
</Link>

<Button className='btn'>
 Summary Reports
</Button>
      </div>

    </div>
    </>
  )
}

export default AllReports