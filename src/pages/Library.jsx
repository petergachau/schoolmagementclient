import React from 'react'
import { Link } from 'react-router-dom'

const Library = () => {
  return (
 
<main className="mainFinanace">
    <h3>SMS Finance Department</h3>
    <div className="top-levels">
        <button className="btn">
            <Link className='link' to='/registration'>
              Registration
            </Link>
            </button>
        <button className="btn">
        <Link className='link' to='/borrowbook'>
              Borrow a book  
                </Link>
            </button>
        <button className="btn">
        <Link className='link' to='/returnbook'>
             Return a book
                </Link> 
            </button>
    </div>
    <div className="lower-levels">
    <button className="btn">
    <Link className='link' to='/books'>
             Books in
                </Link>
        </button>
    <button className="btn">
    <Link className='link' to='/booksout'>
          Books Borrowed
                </Link>
        </button>
    <button className="btn">
    <Link  className='link' to='/users'>
              Users
                </Link>
        </button>
    </div>
</main>  )
}

export default Library