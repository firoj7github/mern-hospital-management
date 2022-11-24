import React from 'react'
import './Banner.css'
import banner from '../../image/2.png'

 const Banner = () => {
  return (
    <div className='banner-all'>
      <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src={banner} className="max-w-md ml-40 rounded shadow-1xl banner-pic" />
    <div>
      <h1 className="text-5xl font-bold">MEDICINE CENTER <br/> ON THE GO!</h1>
      <p  className="py-6 banner-text">From appointment booking to inventory management, billing, laboratory management, everything is now controlled by hospital management software.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
      <button className="banner-btn">Learn More</button>
    </div>
  </div>
</div> 
    </div>
  )
}

export default Banner;