import React, { useEffect, useState } from 'react'
import UserShow from './UserShow';

 const Users = () => {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://hospital-management-server-eight.vercel.app/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[]);
  return (
    <div>
      <h2 className='text-center pt-5 text-2xl pb-5 font-bold'>All USER</h2>
        <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  
  {
    users.map(user=> <UserShow
    key={user._id}
    user={user}
    ></UserShow>)
  }
    
      
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Users;