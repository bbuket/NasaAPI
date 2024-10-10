import React from 'react'
import '../index.css'


function Sidebar({handleToogleModal , data}) {
  return (
    <div className='sidebar'>
      <div onClick={handleToogleModal} className='bgOverlay'></div>
      <div className='sidebarContents'>
        <h2>{data?.title}</h2>
        <div>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToogleModal}>
        <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  )
}

export default Sidebar