import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { useQuery } from 'react-query'
import {loadStripe} from '@stripe/stripe-js';
import { Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
// import Swal from 'sweetalert2';


// const stripePromise = loadStripe('pk_test_51MKcbcJC4DjQ4iiXWgMbhZvUwqwjmIlPgSxwJDkD0t0zLPGPzsPWPyLnNcCPpSR9r1fjavSMTabkXKx7pWOuS3Av00RvtWo6rI');

 const Payment = (props) => {
  // const stripe = useStripe();
  //   const elements = useElements();

  const publishableKey =
    'pk_test_51MKcbcJC4DjQ4iiXWgMbhZvUwqwjmIlPgSxwJDkD0t0zLPGPzsPWPyLnNcCPpSR9r1fjavSMTabkXKx7pWOuS3Av00RvtWo6rI';
  
    const {id}=useParams();
    
    const [appionment, setPayment]= useState([]);
  
 
  
  useEffect(()=>{
       fetch(`https://hospital-management-server-eight.vercel.app/booking/${id}`,{
        method: 'GET',
        headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res=>res.json())
      .then(data=>setPayment(data));
    },[]);
    const priceForStripe = appionment.price * 100;

    



    const payNow = async token => {
      try {
        const response = await axios({
          url: 'https://hospital-management-server-eight.vercel.app/payment',
          method: 'post',
          data: {
            amount: appionment.price * 100,
            token,
          },
        });
        
      } catch (error) {
        
        console.log(error);
      }
    };

   
    
  return (
    <div>
        
  <div className="card w-50 max-w-md bg-base-100 mt-5 ml-40 mb-4 bg-green-100">
  <div className="card-body">
    
        

     
          <h2 className="card-title">Pay for {appionment.treatment}</h2>
        <p>We will see you on <span className='text-orange-700'>{appionment.date}</span> at <span>{appionment.slot}</span></p>
        <p>Please Pay: ${appionment.price}</p>

        
        
     
 
    
    
  </div>
</div>
    <div className="card flex-shrink-0 w-50 max-w-md ml-40 ">
      <div className="card-body">
     

<StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        amount={priceForStripe}
        token={payNow}
        
/>
    
          
        
      </div>
    </div>
  

    </div>
  )
}

export default Payment;