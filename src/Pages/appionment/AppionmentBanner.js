import React, { useState } from 'react'
import image11 from '../../image/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


 const AppionmentBanner = ({date, setDate}) => {
    
  return (
    <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={image11} class="max-w-lg rounded-lg shadow-2xl ml-48" />
    <div>
    <DayPicker
    mode="single" 
    selected={date}
    onSelect={setDate}/>
      
    </div>
  
  </div>
</div>
  )
}

export default AppionmentBanner;