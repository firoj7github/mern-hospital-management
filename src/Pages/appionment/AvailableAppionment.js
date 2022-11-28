import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import Services from './Services';
import BookingModal from './BookingModal';

 const AvailableAppionment = ({date}) => {
    const [services, setServices]=useState([]);
    const [treatment, setTreatment]=useState(null);
    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServices(data));
    },[])
  return (
    <div>
        <h3 className='text-center text-xl text-cyan-500'>Available Appionment on {format(date, 'PP')}</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service=><Services setTreatment={setTreatment} service={service}></Services>)
            }
        </div>
        {treatment && <BookingModal date={date} treatment={treatment}></BookingModal>}
    </div>
  )
}
export default AvailableAppionment;