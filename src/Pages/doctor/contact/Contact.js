import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-all'>
        <h2 className='text-center text-xl pt-10 text-green-500'>Contact Us</h2>
        <h1 className='text-center text-3xl text-white mb-8'>Stay Connected with us</h1>
        <div className='flex flex-col gap-3 input-all'>
          <div>
          <input type="text" placeholder="Email here" className="input  input-bordered w-full max-w-xs" />
          </div>
          <div>
          <input type="text" placeholder="Email here" className="input  input-bordered w-full  max-w-xs" />
          </div>
          <div>
          <input type="text" placeholder="Your message here" className="input  input-bordered w-full h-24  max-w-xs" />
          
        </div>
          </div>
        
        
       
        
    </div>
  )
}

export default Contact;