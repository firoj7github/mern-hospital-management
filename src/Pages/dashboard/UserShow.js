import React from 'react'
import { toast} from 'react-toastify';

 const UserShow = ({user}) => {
  const{email, role}=user;
  const makeAdmin=()=>{
    fetch(`https://hospital-management-server-eight.vercel.app/user/admin/${email}`,{
        method: 'PUT',
        headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res=>res.json())
      .then(data=>{
       console.log(data);
        toast.success('successfully make an admin');       
      });
    }
  

  return (
    
       <tr>
        <td></td>
        <td>{email}</td>
        <td>{role !=='admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
        <td><button className="btn btn-xs">Remove Admin</button></td>
        </tr>
     
    
  )
}

export default UserShow;