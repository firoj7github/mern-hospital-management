import React from 'react'

 const Services = ({service, setTreatment}) => {
    const{name, price, slots}=service;
  return (
    <div className="card w-96 bg-base-100 drop-shadow-sm border-slate-400 bg-green-200 mb-12 m-auto">
  <div className="card-body">
    <h1 className=" text-center text-2xl text-black-500 font-bold">{name}</h1>
    <p className="text-center">{slots.length>0 
    ?
    <sapn>{slots[0]}</sapn>
    :
    <span className="text-red-500 text-center">No Slot available</span>
    }</p>
    <p className="text-center">{slots.length} {slots.length>1 ? 'spaces': 'space'}  available</p>
    <p className="text-center">Price: ${price}</p>
    <div className="card-actions justify-center mt-4">
      
      <label htmlFor="booking-modal" disabled={slots.length===0}
      onClick={()=>setTreatment(service)} className="btn btn-secondary-100">Book Appionment</label>
    </div>
  </div>
</div>
  )
}

export default Services;
