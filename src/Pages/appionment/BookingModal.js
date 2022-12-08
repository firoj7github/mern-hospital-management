import React from 'react'
import { format } from 'date-fns';

 const BookingModal = ({treatment, date, setTreatment}) => {
    const{name,slots}= treatment;

    const handleSubmit=event=>{
      event.preventDefault();
      setTreatment(null);
    }
  return (
    <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-green-400 ml-20">Booking : {name}</h3>
    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 justify-items-center mt-5'>
    <input disabled type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
    <select name='slot' className="select select-bordered w-full max-w-xs">
    {
    slots.map(slot=><option value={slot}>{slot}</option>)
    }
    </select>
    <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Email here" className="input input-bordered w-full max-w-xs" />
    <input type="submit" value='submit' className="input input-bordered w-full max-w-xs bg-green-300" />
    </form>
    
    
  </div>
</div>
    </div>
  )
}

export default BookingModal;