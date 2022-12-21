import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

 const MyAppionment = () => {
  const [user] = useAuthState(auth);

  const [appoinment, setappionment]= useState([]);
  useEffect(()=>{
    if(user){
      fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
      .then(res=>res.json())
      .then(data=>setappionment(data));
    }
    },[user]);
    
    
  
  return (
    <div>
 
            <h2 className='text-center pt-5 text-2xl pb-5 font-bold'>My Appionment</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        
       
        <th>Email</th>
        <th>Phone Number</th>
        <th>Treatment Name</th>
        <th>Slot</th>
      </tr>
    </thead>
    <tbody>
       {
        appoinment.map(a=> <tr>
          <td>{a.patientEmail}</td>
          <td>{a.phone}</td>
          <td>{a.treatment}</td>
          <td>{a.slot}</td>
      </tr>)
       }
            
           
 
     
      
     
      
    </tbody>
  </table>
</div>
        </div>
  )
}

export default MyAppionment;