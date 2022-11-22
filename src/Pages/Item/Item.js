import React from 'react'
import './Item.css'
import image from '../../image/20.jpeg'
import image1 from '../../image/100.png'
import { GiBrain,  } from "react-icons/gi";
import { FaTooth } from "react-icons/fa";
import {RiHeartPulseLine,   } from "react-icons/ri";
 const Item = () => {
  return (
    <div className='item-all'>
         <h1 className='item-header'>MODERN SERVICE PHARMACY</h1>
         <p className='item-para font-normal'><span className='ml-11'>At Medicine Center Compounding Pharmacy, we believe health is not just the absence </span>  <br/> <span className='ml-4'>of disease, but a state of immense vitality. It is our mission to help you feel better, live longer, </span>  <br/> <span className='ml-48'>and become the best possible you!</span> </p>
         <div className='item-slide'>
         <div className="hero min-h-screen">
  <div className="hero-content item-slide-img flex-col lg:flex-row-reverse">
    <img src={image} className="max-w-xxlg" />
    <div className='item-slide-1'>
      <div className='item-divided'>
         <div className='item-1'>
          <div>
          <i className='item-icon'><GiBrain/></i>
          </div>
          <div className='item-child-1'>
              <div>
                <h1 className='item-child-header'>NEUROLOGICAL</h1>
                <p className='item-child-dec'>Neurology is the branch of medicine dealing with the diagnosis and treatment of all categories of conditions</p>
              </div>
              
          </div>
         </div>
         <div className='item-2'>
         <div>
         <i className='item-icon'><RiHeartPulseLine/></i>
         </div>
          <div className='item-child-2'>
          <div>
                <h1 className='item-child-header'>CARDIOLOGICAL</h1>
                <p className='item-child-dec'>Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system.</p>
              </div>
          </div>
         </div>
         <div className='item-3'>
         <div>
         <i className='item-icon'><FaTooth/></i>
         </div>
          <div className='item-child-3'>
          <div>
                <h1 className='item-child-header'>TOOTHOLOGY</h1>
                <p className='item-child-dec'>Your smile is our mission! We at Toothology are dedicated to providing quality and comfortable dental care for every person</p>
              </div>
          </div>
         </div>
      </div>
      
    </div>
  </div>
</div>
         </div>
    </div>
  )
}
export default Item;