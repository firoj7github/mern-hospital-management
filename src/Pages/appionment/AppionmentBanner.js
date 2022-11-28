import React, { useState } from 'react'
import image11 from '../../image/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

 const AppionmentBanner = () => {
    const [date, setDate]= useState(new Date());
  return (
    <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={image11} class="max-w-lg rounded-lg shadow-2xl ml-48" />
    <div>
    <DayPicker
    mode="single" 
    selected={date}
    onSelect={setDate}/>
      <p className='ml-5 font-semibold'>You picked {format(date, 'PP')}.</p>
    </div>
  
  </div>
</div>
  )
}

export default AppionmentBanner;