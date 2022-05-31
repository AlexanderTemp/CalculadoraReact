import { MdDarkMode } from "react-icons/md"
import { FiSun } from "react-icons/fi"
import { useState } from "react"
import './App.css';
import { data } from "./data";
import Boton from "./Boton";
function App() {
  const [mode, setMode] = useState(false)

  return (
    <div className="calculadora" style={{ backgroundColor: mode? "#FFFFFF":"#181818"}}>
      <div className="header">
        <h1 style={{color: mode ? "#E25F6D" : "#7AD6B5"}}>Calculadora</h1>
        <div className="modo" onClick={() => setMode(!mode)}>
          {mode ?
            (<MdDarkMode className="icon" style={{color: "black"}}/>) :
            (<FiSun className="icon" style={{color: "white"}}/>)
          }
        </div>

      </div>
      <div className="pantalla">
        <div className="operacion">
          <h3 style={{color:"#909090"}}>34+34=67</h3>
        </div>
        <div className="resultado">
          <h2 style={{color:mode?"#494949":"white"}}>719</h2>
        </div>
      </div>
      <div className="contenedor--botones">
        <div className="botones">
          {data.map(bot => (
            <Boton key={bot.id} id={bot.id} content={bot.content} color={mode ? bot.colorL : bot.colorD} colorT={mode ? bot.colorLT : bot.colorDT} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
