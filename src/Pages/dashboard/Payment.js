import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51MKcbcJC4DjQ4iiXWgMbhZvUwqwjmIlPgSxwJDkD0t0zLPGPzsPWPyLnNcCPpSR9r1fjavSMTabkXKx7pWOuS3Av00RvtWo6rI');

 const Payment = () => {
    const {id}=useParams();
    const [payment, setPayment]= useState([]);
    console.log(payment);
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
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
  <div class="card w-50 max-w-md bg-base-100 shadow-xl">
  <div class="card-body">
    {
      payment.map(pay=>{
        <div>
          <h2 class="card-title">Pay for{pay.treatment}</h2>
        <p>We will see you on{payment}</p>
        </div>
        
      })
    }
    
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div class="card-body">
      <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
       
        
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Payment;