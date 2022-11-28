import React from 'react'

 const Services = ({service, setTreatment}) => {
    const{name, slots}=service;
  return (
    <div className="card w-96 bg-base-100 drop-shadow-xl border-slate-200 mb-8">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{slots.length>0 
    ?
    <sapn>{slots[0]}</sapn>
    :
    <span className="text-red-500">No Slot available</span>
    }</p>
    <p>{slots.length} {slots.length>1 ? 'spaces': 'space'}  available</p>
    <div className="card-actions justify-end">
      
      <label for="booking-modal" disabled={slots.length===0}
      onClick={()=>setTreatment(service)} class="btn btn-green-300">Book Appionment</label>
    </div>
  </div>
</div>
  )
}

export default Services;
