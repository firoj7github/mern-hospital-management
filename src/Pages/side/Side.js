import React from 'react'
import './Side.css'
import image5 from '../../image/400.jpeg'
import image6 from '../../image/401.jpeg'
import image7 from '../../image/402.jpeg'

 const Side = () => {
  return (
    <div className='side-all'>
         <h1 className='side-header'>WE CARE</h1>
         <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        <div className='side'>
            <div className='side-1'>
                <img src={image5} alt=""/>
                <div className='side-part'>
                    <h1>CHILD CARE</h1>
                    <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                    <a href="">Read More</a>

                </div>
            </div>
            <div className='side-2'>
            <img src={image6} alt=""/>
            <div className='side-part'>
                    <h1>CHILD CARE</h1>
                    <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                    <a href="">Read More</a>

                </div>
            </div>
            <div className='side-3'>
                <img src={image7} alt=""/>
                <div className='side-part'>
                    <h1>CHILD CARE</h1>
                    <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                    <a href="">Read More</a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Side;