import React, { useState } from 'react'
import AppionmentBanner from './AppionmentBanner';
import AvailableAppionment from './AvailableAppionment';

 const Appionment = () => {
  const [date, setDate]= useState(new Date());
  return (
    <div>
       <AppionmentBanner date={date} setDate={setDate}></AppionmentBanner>
       <AvailableAppionment date={date}></AvailableAppionment> 
    </div>
  )
}

export default Appionment;