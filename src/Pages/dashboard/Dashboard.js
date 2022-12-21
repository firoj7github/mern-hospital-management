import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
     <Outlet></Outlet>
    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label for="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-slate-400 sidebar text-base-content">
  
      <li><Link to='/dashboard' className='bg-green-300 mt-5 mb-3' >My Appionment</Link></li>
      <li><Link to='/dashboard/review' className='bg-green-300'>Review</Link></li>
    </ul>
  
  </div>
</div>
  )
}

export default Dashboard;