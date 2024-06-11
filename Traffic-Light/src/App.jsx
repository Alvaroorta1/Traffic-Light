import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

const [color, setColor] = useState("");



  return (
    <>
      <div className="traffic-signal">
        <div className={"light red " + (color ==="red" ? "glow" : "")}
        onClick={() => setColor("red") }
        ></div>
        
        <div className={"light yellow " + (color ==="yellow" ? "glow" : "")}
        onClick={() => setColor("yellow") }
        ></div>
        
        <div className={"light green " + (color ==="green" ? "glow" : "")}
        onClick={() => setColor("green") }
        ></div>
      
      </div>
    </>
  )
}

export default App
