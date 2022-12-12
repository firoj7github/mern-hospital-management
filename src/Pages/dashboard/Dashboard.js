import React from 'react'

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
   
    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label for="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-slate-400 text-base-content">
  
      <li><a className='bg-green-300 mt-5 mb-3' >Sidebar Item 1</a></li>
      <li><a className='bg-green-300'>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
  )
}

export default Dashboard;