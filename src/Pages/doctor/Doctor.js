import React from 'react'
import './Doctor.css'
import doctor1 from '../../image/doctor1.png'
import doctor2 from '../../image/doctor2.png'
import doctor3 from '../../image/doctor3.png'

const Doctor = () => {
  return (
    <div className='doctor-all'>
        <h1 className='doctor-header'>OUR SPECIALISTS</h1>
        <p className='doctor-para'>Specialist doctors was a doctor really supposed to wait to provide that care until the patient <br></br><span className='ml-40'>faced a truly immediate life-or-death situation</span> </p>
      <div className='doctor'>
        <div className='doctor-1'>
          <img className='doctor-1-img' src={doctor1} alt=""/>
          <div className='doctor-title'>
            <h2>Dr. Rafi Sultana</h2>
            <h4>MBBS, Dhaka Medical</h4>
          </div>
        </div>
        <div className='doctor-2'>
         <img className='doctor-2-img' src={doctor2} alt=""/>
         <div className='doctor-title'>
         <h2>Dr. Sofi Alam</h2>
            <h4>MBBS, Rajshahi Medical</h4>
         </div>
        </div>
        <div className='doctor-3'>
        <img className='doctor-3-img' src={doctor3} alt=""/>
        <div className='doctor-title'>
        <h2>Dr. Rumi Khatun</h2>
            <h4>MBBS, Shylet Medical</h4>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Doctor;