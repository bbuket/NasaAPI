import React from 'react'
import '../index.css'
function Main({data}) {
  return (

    <div className='imgContainer'>
        <img src={data?.hdurl} alt={data?.title} className='bgImage'/> 

    </div>
    
   
  )
}

export default Main