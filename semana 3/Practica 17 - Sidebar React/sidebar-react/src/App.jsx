import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Sidebar'

let elements = [
  {
  "element": "Alaska",
  "subElements": [
  "Bascom"
  ]
  },
  {
  "element": "Connecticut",
  "subElements": []
  },
  {
  "element": "Wisconsin",
  "subElements": [
  "Oretta",
  "Konterra",
  "Guthrie"
  ]
  },
  {
  "element": "Nebraska",
  "subElements": [
  "Jennings",
  "Harviell",
  "Alfarata",
  "Bluffview",
  "Escondida"
  ]
  },
  {
  "element": "Georgia",
  "subElements": []
  }
  ]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar data={elements}/>
    </>
  )
}

export default App
