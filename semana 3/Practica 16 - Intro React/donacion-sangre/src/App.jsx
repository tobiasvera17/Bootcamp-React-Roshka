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
      {
        keys.map((key, index) => {
          return <Info data={peticion[key]} idContainer={index} />
        })
      }
    </>
  )
}

export default App
