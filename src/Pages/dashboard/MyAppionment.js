import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

 const MyAppionment = () => {
  const [user] = useAuthState(auth);

  const [appoinment, setAppionment]= useState([]);
  useEffect(()=>{
    if(user){
      fetch(`http://localhost:5000/booking?patientEmail=${user.email}`,{
        method: 'GET',
        headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res=>res.json())
      .then(data=>setAppionment(data));
    }
    },[user]);
    
    
  
  return (
    <div>
 
            <h2 className='text-center pt-5 text-2xl pb-5 font-bold'>MY APPIONMENT</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        
       
        <th>Email</th>
        <th>Phone Number</th>
        <th>Treatment Name</th>
        <th>Slot</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
       {
        appoinment.map(a=> <tr>
          <td>{a.patientEmail}</td>
          <td>{a.phone}</td>
          <td>{a.treatment}</td>
          <td>{a.slot}</td>
          <td>
            {(a.price && !a.paid) &&<Link to={`payment/${a._id}`}><button className='btn btn-success btn-sm'>pay</button></Link>}
            {(a.price && a.paid) &&<span className='text-success'>paid</span>}
            </td>
      </tr>)
       }
            
           
 
     
      
     
      
    </tbody>
  </table>
</div>
        </div>
  )
}

export default MyAppionment;