import React from 'react'
import '../index.css'


function Footer({handleToogleModal , data}) {
  return (
    <footer>
      <div className='bgGradient'></div>
        <div>
            <h2>{data?.title}</h2>
            <h1>NASA API PROJECT</h1>
        </div>
        <button onClick={handleToogleModal}>
            <i className="fa-solid fa-circle-info"></i>
        </button>

    </footer>
  )
}

export default Footer