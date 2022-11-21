import React from 'react'
import './Banner.css'
import banner from '../../image/2.png'

 const Banner = () => {
  return (
    <div className='banner-all'>
      <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src={banner} className="max-w-md ml-40 rounded shadow-1xl" />
    <div>
      <h1 className="text-5xl font-bold">Always Service For You !</h1>
      <p  className="py-6 banner-text">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Learn More</button>
    </div>
  </div>
</div> 
    </div>
  )
}

export default Banner;