import React, { useEffect } from 'react'
import './Count.css'
import image9 from '../../../image/map.png'


const Count = () => {
    
  return (
    <div className='count-all'>
      <h1 className='count-global'>GL<span className='text-red-600 font-bold'>O</span>BAL PRESENCE</h1>
       <img className='count-image'  src={image9} alt=""/>
    </div>
  )
}

export default Count;