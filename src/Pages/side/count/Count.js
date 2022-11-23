import React, { useEffect } from 'react'
import './Count.css'
import {  } from "react-icons/fa";
import { RiEmotionHappyLine } from "react-icons/ri";
import icon2 from '../../../image/doctor.png'
import icon3 from '../../../image/staffs.png'
import icon4 from '../../../image/services.png'
import { $ } from 'react-jquery-plugin';
import {counterUp} from 'counterup2'

const Count = () => {
    useEffect(()=>{
        // let valueDisplays = document.querySelectorAll(".count-num");
        // let interval = 5000;
        // valueDisplays.forEach((valueDisplay)=>{
        //   let startValue = 0;
        //   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        //   let duration = math.floor(interval / endValue);
        //   let counter = setInterval(function(){
        //    startValue += 1;
        //    valueDisplay.textContent=startValue;
        //   });
        // });
        const el = document.querySelector( '.counter' )

// Start counting, do this on DOM ready or with Waypoints.
   counterUp( el, {
    duration: 3000,
    delay: 16,
    } );
        const nl = document.querySelector( '.counter-1' )

// Start counting, do this on DOM ready or with Waypoints.
   counterUp( nl, {
    duration: 3000,
    delay: 16,
    } )
        const ll = document.querySelector( '.counter-2' )

// Start counting, do this on DOM ready or with Waypoints.
   counterUp( ll, {
    duration: 3000,
    delay: 16,
    } )
        },[]);

  return (
    <div className='count-all'>
       <div className='count'>
        <div className='count-1'>
        <img className='count-icon' src={icon2} alt=""/> 
        <span className='counter' data-val="30">200</span>
        <h1 className='count-header'>CONSULTANT</h1> 
        </div>
        <div className='count-2'>
        <img className='count-icon' src={icon3} alt=""/>
        <span className='counter-1' data-val="50">150</span>
        <h1 className='count-header'>STAFS</h1>
        </div>
        <div className='count-3'>
        <img className='count-icon' src={icon4} alt=""/>
        <span className='counter-2' data-val="200">400</span>
        <h1 className='count-header'>SERVICES</h1>
        </div>
       </div>
    </div>
  )
}

export default Count;