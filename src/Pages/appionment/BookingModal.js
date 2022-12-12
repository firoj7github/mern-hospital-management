import React from 'react'
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

 const BookingModal = ({treatment, date, setTreatment}) => {
    const{_id,name,slots}= treatment;

    const [user] = useAuthState(auth);
    const formattedDate= format(date ,'pp');
    
    const handleSubmit=event=>{
      event.preventDefault();
      const slot = event.target.slot.value;
     const booking ={
      treatmentId : _id ,
      treatment : name,
      date : formattedDate,
      slot,
      patientEmail : user.email,
      phone : event.target.phone.value

     }
     const url='http://localhost:5000/booking';
  fetch(url, {
      method : 'POST',
      headers : {
         'content-type': 'application/json'
      },
      body : JSON.stringify(booking)
  })
  .then(res=>res.json())
  .then(result=>{
    setTreatment(null); 
  })
   
    }
  return (
    <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-green-400 ml-20">Booking : {name}</h3>
    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 justify-items-center mt-5'>
    <input disabled type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
    <select name='slot' className="select select-bordered w-full max-w-xs">
    {
    slots.map((slot, index)=><option key={index} value={slot}>{slot}</option>)
    }
    </select>
    
    <input type="text" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
    <input name='phone' type="number" placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs" />
    <input type="submit" value='submit' className="input input-bordered w-full max-w-xs bg-green-300" />
    </form>
    
    
  </div>
</div>
    </div>
  )
}

export default BookingModal;