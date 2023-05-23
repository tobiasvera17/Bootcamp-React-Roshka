import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import Info from './Info.jsx'

function App() {
  const [count, setCount] = useState(0)
  let peticion = {}
    $.ajax({
      dataType: "json",
      async:false,
      url: "http://192.168.16.90:8000/api/solicitudes",
      success: function(result) {
        peticion = result.data
      }
    })
    const keys = Object.keys(peticion);

  return (
    <>
        <div id="container" className="container-lg p-0 m-0 d-flex flex-column">
            
          <div id="header-container" className="d-flex container-fluid text-center">
              <div id="solicitudes-header">
                  Solicitudes
              </div>
              <div id="mas-button-container">
                  <button id="btn-agregarSolicitud" className="btn btn-link"><i className="bi bi-plus-square-fill"></i></button>
              </div>
          </div>

          <div id="main-container" className="d-flex flex-column container-fluid align-items-center">
              <div id="misSolicitudes-container" className="d-flex justify-content-center align-items-center">Mis solicitudes <input id="check-misSolicitudes" type="checkbox" /></div>
                {
                  keys.map((key, index) => {
                    return <Info data={peticion[key]} idContainer={index} />
                  })
                }
          </div>
        </div>
    </>
  )
}

export default App
