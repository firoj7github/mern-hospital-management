import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Share/Navbar/Footer/Footer';
import Navbar from './Pages/Share/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
