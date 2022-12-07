import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appionment from './Pages/appionment/Appionment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Share/Navbar/Footer/Footer';
import Navbar from './Pages/Share/Navbar/Navbar';
import Signup from './Pages/signup/Signup';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/appionment' element={<Appionment></Appionment>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/signup' element={<Signup></Signup>}/>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
