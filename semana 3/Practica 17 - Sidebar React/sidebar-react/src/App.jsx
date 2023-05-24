import { useState } from 'react'
import Sidebar from './Sidebar'
import './sidebar.css'

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
