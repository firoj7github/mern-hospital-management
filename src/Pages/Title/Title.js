import React from 'react'
import './Title.css'
import { useEffect } from 'react'
import {  } from "react-icons/fa";
import icon2 from '../../image/doctor.png'
import icon3 from '../../image/staffs.png'
import icon4 from '../../image/services.png'
import {counterUp} from 'counterup2'


const Title = () => {
  useEffect(()=>{
        
    const el = document.querySelector( '.counter' )

// Start counting, do this on DOM ready or with Waypoints.
counterUp( el, {
duration: 6000,
delay: 16,
} );
    const nl = document.querySelector( '.counter-1' )

// Start counting, do this on DOM ready or with Waypoints.
counterUp( nl, {
duration: 6000,
delay: 16,
} )
    const ll = document.querySelector( '.counter-2' )

// Start counting, do this on DOM ready or with Waypoints.
counterUp( ll, {
duration: 6000,
delay: 16,
} )
    },[]);
  return (
    <div className="title-full">
         <div className='title-cover'>
         <div className='count-all-all'>
       <div className='count'>
        <div className='count-1'>
        <img className='count-icon' src={icon2} alt=""/> 
        <span className='counter' data-val="30">600</span>
        <h1 className='count-header'>CONSULTANT</h1> 
        </div>
        <div className='count-2'>
        <img className='count-icon' src={icon3} alt=""/>
        <span className='counter-1' data-val="50">500</span>
        <h1 className='count-header-1'>STAFS</h1>
        </div>
        <div className='count-3'>
        <img className='count-icon' src={icon4} alt=""/>
        <span className='counter-2' data-val="200">700</span>
        <h1 className='count-header-2'>SERVICES</h1>
        </div>
       </div>
    </div>
         </div>
    </div>
  )
}

export default Title;