import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51MKcbcJC4DjQ4iiXWgMbhZvUwqwjmIlPgSxwJDkD0t0zLPGPzsPWPyLnNcCPpSR9r1fjavSMTabkXKx7pWOuS3Av00RvtWo6rI');

 const Payment = () => {
    const {id}=useParams();
    const [payments, setPayment]= useState([]);
  
  useEffect(()=>{
       fetch(`http://localhost:5000/booking/${id}`,{
        method: 'GET',
        headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res=>res.json())
      .then(data=>setPayment(data));
    },[]);
  return (
    <div>
        
  <div class="card w-50 max-w-md bg-base-100 mt-5 ml-40 mb-4 bg-green-100">
  <div class="card-body">
    
        

     
          <h2 class="card-title">Pay for {payments.treatment}</h2>
        <p>We will see you on <span className='text-orange-700'>{payments.date}</span> at <span>{payments.slot}</span></p>
        <p>Please Pay: ${payments.price}</p>

        
        
     
 
    
    
  </div>
</div>
    <div class="card flex-shrink-0 w-50 max-w-md ml-40 ">
      <div class="card-body">
      <Elements stripe={stripePromise}>
    <CheckoutForm payments={payments} />
  </Elements>
       
        
      </div>
    </div>
  

    </div>
  )
}

export default Payment;