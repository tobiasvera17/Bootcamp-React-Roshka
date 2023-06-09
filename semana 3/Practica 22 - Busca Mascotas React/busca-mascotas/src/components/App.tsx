import { useState } from 'react'
import { Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Header from './Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-fluid p-0 m-0'>
      <Header/>
      <div className='container-fluid p-0 m-0'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
