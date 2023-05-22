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

  return (
    <>
      <Info data={{
        "id": 81,
        "created_at": "2023-04-17T19:59:19.000000Z",
        "updated_at": "2023-04-17T19:59:19.000000Z",
        "solicitud": "TOKENNNMNNNNNN",
        "creado_por": 31,
        "fecha_limite": "12/4/2023",
        "id_estado": 1,
        "volumenes_necesarios": 78,
        "nombre_apellido_donatario": "fdagfgfsa",
        "cedula_donatario": "4687",
        "telefono_contacto": "0991459016",
        "tipo_sangre": 3,
        "establecimiento": "3"}} idContainer={2}/>
    </>
  )
}

export default App
