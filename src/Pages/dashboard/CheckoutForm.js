import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import { PaymentElement } from "@stripe/react-stripe-js";
import './chech.css'


 const CheckoutForm = () => {
  //   const stripe = useStripe();
  //   const elements = useElements();
  //   const [cardError, setCardError]= useState('');
  //   const [success, setSuccess]= useState('');
  //   const{price, treatment}=appionment;
   
    
    
    
  //   const [clientSecret, setClientSecret] = useState('');
    
   
  //   useEffect(() => {
  //   fetch(`http://localhost:5000/cash`, {
  //     method: "POST",
  //     headers:{
  //       'content-type': 'application/json',
  //       'authorization':`Bearer ${localStorage.getItem('accessToken')}`
  //     },
  //     body : JSON.stringify({price}),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
        
  //     console.log(data);
  //         setClientSecret(data.clientSecret);
      
  //     });
  // }, [price]);
  
  
  // const handleSubmit= async(event) =>{
  //       event.preventDefault();
  //       if (!stripe || !elements) {
  //           return;
  //         } 
  //       const card = elements.getElement(CardElement);
  //       if (card == null) {
  //           return;
  //         }

  //         const {error, paymentMethod} = await stripe.createPaymentMethod({
  //           type: 'card',
  //           card,
  //         });
          
  //         if(error){
  //           setCardError(error.message);

  //         }
  //         else{
  //           setCardError('');
  //         }
  //         setSuccess('');

  //         const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
  //           clientSecret,
  //           {
  //             payment_method: {
  //               card: card,
  //               billing_details: {
  //                 treatment: treatment,
  //               },
  //             },
  //           },
  //         );
  //         if(intentError){
  //           setCardError(intentError?.message);
  //         }else{
  //           setCardError(''); 
  //           console.log(paymentIntent);
  //           setSuccess('your payment is completed');
  //         }
      
  //   }
    
  // return (

  //   <>
  //   <form onSubmit={handleSubmit}>
  //     <CardElement
  //       options={{
  //         style: {
  //           base: {
  //             fontSize: '16px',
  //             color: '#424770',
  //             '::placeholder': {
  //               color: '#aab7c4',
  //             },
  //           },
  //           invalid: {
  //             color: '#9e2146',
  //           },
  //         },
  //       }}
  //     />
  //     <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
  //       Pay
  //     </button>
  //   </form>
  //   {
  //     cardError && <p className='text-red-500'>{cardError}</p>
  //   }
  //   {
  //     success && <p className='text-green-500'>{success}</p>
  //   }
  //   </>
   
        
  // )

  
}

export default CheckoutForm;