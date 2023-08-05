
import { useState } from 'react'
import './App.css'
import Filtrado from './componentes/filtrado'
import Header from './componentes/header'

function App() {
  const[arreglo,setArreglo]=useState([])
  const[total,setTotal]=useState(0)
  
  
  return (
    <div className="App">
      <Header
      arreglo={arreglo}
      setArreglo={setArreglo}
      total={total}
      
      ></Header>
      <Filtrado
            arreglo={arreglo}
            setArreglo={setArreglo}
            total={total}
            setTotal={setTotal}
            ></Filtrado>
            
    </div>
  )
}

export default App
