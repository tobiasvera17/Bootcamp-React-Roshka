import { Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Header from './Header'
import Footer from './Footer';
import Copyright from './Copyright';
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
    <div><Toaster/></div>
    <div className='container-fluid p-0 m-0'>
      <Header/>
      <div className='container-fluid p-0 m-0'>
        <Outlet />
      </div>
      <Footer/>
      <Copyright/>
    </div>
    </>
  )
}

export default App
