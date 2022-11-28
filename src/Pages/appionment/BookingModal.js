import React from 'react'
import { format } from 'date-fns';

 const BookingModal = ({treatment, date}) => {
    const{name,slots}= treatment;
  return (
    <div>
        <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg text-secondary">Booking : {name}</h3>
    <form className='grid grid-cols-1 gap-4 justify-items-center mt-5'>
    <input disabled type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
    <select name='slot' class="select select-bordered w-full max-w-xs">
    {
    slots.map(slot=><option value={slot}>{slot}</option>)
    }
    </select>
    <input name='name' type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Email here" class="input input-bordered w-full max-w-xs" />
    <input type="submit" value='submit' class="input input-bordered w-full max-w-xs bg-green-300" />
    </form>
    
    
  </div>
</div>
    </div>
  )
}

export default BookingModal;