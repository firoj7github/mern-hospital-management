import React from 'react'
import './Side.css'
import image5 from '../../image/400.jpeg'
import image6 from '../../image/401.jpeg'
import image7 from '../../image/402.jpeg'

 const Side = () => {
  return (
    <div className='side-all'>
         <h1 className='side-header'>WE CARE</h1>
         <p className='side-dec'><span className='ml-12'>
         Search Best Ivf Hospital In Chennai, Top Information From Trusted Internet Sources. Best Ivf Hospital</span><br></br> <span className='ml-60'>In Chennai Get Expert Advice and Curated Content</span> </p>
        <div className='side'>
            <div className='side-1'>
                <img className='side-1-img' src={image5} alt=""/>
                <div className='side-part'>
                    <h1 className='side-child-header'>CHILD CARE</h1>
                    <p className='side-child-para'>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                    <a className='side-child-link' href="">Read More</a>

                </div>
            </div>
            <div className='side-2'>
            <img className='side-1-img' src={image6} alt=""/>
            <div className='side-part'>
                    <h1 className='side-child-header'>DENTAl CARE</h1>
                    <p className='side-child-para'>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                    <a className='side-child-link' href="">Read More</a>

                </div>
            </div>
            <div className='side-3'>
                <img className='side-1-img' src={image7} alt=""/>
                <div className='side-part'>
                    <h1 className='side-child-header'>BABY CARE</h1>
                    <p className='side-child-para'>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                    <a className='side-child-link' href="">Read More</a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Side;