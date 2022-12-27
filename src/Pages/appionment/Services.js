import React from 'react'

 const Services = ({service, setTreatment}) => {
    const{name, price, slots}=service;
  return (
    <div className="card w-96 bg-base-100 drop-shadow-md border-slate-400 bg-emerald-100 mb-12 ml-7">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{slots.length>0 
    ?
    <sapn>{slots[0]}</sapn>
    :
    <span className="text-red-500">No Slot available</span>
    }</p>
    <p>{slots.length} {slots.length>1 ? 'spaces': 'space'}  available</p>
    <p>Price: ${price}</p>
    <div className="card-actions justify-end">
      
      <label htmlFor="booking-modal" disabled={slots.length===0}
      onClick={()=>setTreatment(service)} className="btn btn-secondary-100">Book Appionment</label>
    </div>
  </div>
</div>
  )
}

export default Services;
