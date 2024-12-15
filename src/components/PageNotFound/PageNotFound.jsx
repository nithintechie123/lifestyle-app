import React from 'react'

import "./style.css"

function PageNotFound() {
  return (
    <div className='page-not-found-container'>
    <h1 className='error-heading'>PageNotFound</h1>
    <img src="https://media.istockphoto.com/id/171302206/photo/error-404.jpg?s=2048x2048&w=is&k=20&c=2_EDuP45gSvUhRfxUENgIOTQ-_LKhzJgBzUMTX8fK2o=" alt="error image" className='error-image'/>
    <p>The page you're looking for doesn't exist.</p>
</div>

  )
}

export default PageNotFound