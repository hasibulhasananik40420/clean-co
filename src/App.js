import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { publicRoutes } from './Routes/PublicRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {

  useEffect( ()=>{
    AOS.init();
  },[])

  return (
    <div >
     
     <Navbar>
      <Routes>
      {
        publicRoutes.map(({path,Component},index)=> <Route key={index} path={path} element={<Component/>} />)
      }
      </Routes>
     </Navbar>
     
    </div>
  );
}

export default App;
