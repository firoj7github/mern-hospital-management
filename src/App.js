import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appionment from './Pages/appionment/Appionment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Footer from './Pages/Share/Navbar/Footer/Footer';
import Navbar from './Pages/Share/Navbar/Navbar';
import Signup from './Pages/signup/Signup';
import {ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './Pages/dashboard/Dashboard';
import MyAppionment from './Pages/dashboard/MyAppionment';
import Reviews from './Pages/dashboard/Reviews';
import Users from './Pages/dashboard/Users';
import Payment from './Pages/dashboard/Payment';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/appionment' element={
          <RequireAuth>
            <Appionment></Appionment>
          </RequireAuth>
        
        }/>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        
        }>
          <Route index element={<MyAppionment></MyAppionment>}>
            
          </Route>
          <Route path='review' element={<Reviews></Reviews>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
       
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          </Route>
       
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/signup' element={<Signup></Signup>}/>
      </Routes>
      <ToastContainer />
     <Footer></Footer>
    </div>
  );
}

export default App;
