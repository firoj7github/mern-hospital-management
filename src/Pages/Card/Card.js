import React from 'react'
import './Card.css'
import { FaHandHoldingMedical, FaClinicMedical, FaFileMedicalAlt, FaCommentMedical } from "react-icons/fa";
 const Card = () => {
  return (
    <div className='card-all'>
      <div className='card-item'>
          <div className='card-1'>
          <i className='card-icon'><FaClinicMedical/></i>
           
            <h1 className='card-header'>Home Service</h1>
          
          </div>
          <div className='card-2'>
          <i className='card-icon'><FaHandHoldingMedical/></i>
          <h1 className='card-header'>Health Care</h1>
          </div>
          <div className='card-3'>
          <i className='card-icon'><FaCommentMedical/></i>
          <h1 className='card-header'>Chat Bot</h1>
         
          </div>
          <div className='card-4'>
          <i className='card-icon'><FaFileMedicalAlt/></i>
          <h1 className='card-header'>Emengency Care</h1>
          </div>
      </div>
    </div>
  )
}

export default Card;