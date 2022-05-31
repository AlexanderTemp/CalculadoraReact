import { MdDarkMode } from "react-icons/md"
import { FiSun } from "react-icons/fi"
import { useEffect, useState } from "react"
import './App.css';
import { data } from "./data";
import Boton from "./Boton";

function App() {
  const [mode, setMode] = useState(false)
  const [pantalla, setPantalla] = useState({
    resultado: "",
    operacion: ""
  })

  useEffect(() => { }, [pantalla])
  const evaluacion=(operacion)=>{
    let res="";
    try {
      // eslint-disable-next-line 
      res=eval(operacion)
    } catch (error) {
      res="Ups :C no entendí esto."
    }
    return res
  }
  const onPress = (id) => {
    if (pantalla.resultado !== "" && pantalla.operacion !== "") {
      setPantalla({
        resultado: "",
        operacion: ""
      })
    }
    switch (id) {
      case 1:
        setPantalla({
          resultado: "",
          operacion: ""
        })
        break;
      case 2:
        setPantalla(pant => ({
          ...pant,
          operacion: (parseInt(pant.operacion) * -1).toString()
        }))
        break;
      case 20:
        setPantalla(pant => ({
          ...pant,
          resultado: evaluacion(pant.operacion)
        }))
        break;

      case 8:
        setPantalla(pant => ({
          ...pant,
          operacion: pant.operacion + "*"
        }))
        break;
      case 4:
        setPantalla(pant => ({
          ...pant,
          operacion: pant.operacion + "/"
        }))
        break;
      case 19:
        if (pantalla.resultado === "") {
          setPantalla(pant => ({
            ...pant,
            resultado: parseInt(pant.operacion * pant.operacion),
            operacion: pant.operacion + "^2"
          }))
        } else {
          setPantalla({
            operacion: pantalla.resultado.toString()+"^2",
            resultado: Math.pow(parseInt(pantalla.resultado),2)
          })
        }
        break;
      default:
        setPantalla(pant => ({
          ...pant,
          operacion: pant.operacion + data[data.findIndex(idx => idx.id === id)].content
        }))
        break
    }


  }
  return (
    <div className="calculadora" style={{ backgroundColor: mode ? "#FFFFFF" : "#181818" }}>
      <div className="header">
        <h1 style={{ color: mode ? "#E25F6D" : "#7AD6B5" }}>Calculadora</h1>
        <div className="modo" onClick={() => setMode(!mode)}>
          {mode ?
            (<MdDarkMode className="icon" style={{ color: "black" }} />) :
            (<FiSun className="icon" style={{ color: "white" }} />)
          }
        </div>

      </div>
      <div className="pantalla">
        <div className="operacion">
          {pantalla.resultado!=="Ups :C no entendí esto." && <h3 style={{ color: "#909090" }}>{pantalla.operacion}</h3>}
        </div>
        <div className="resultado">
          <h2 style={{  color: mode ? "#494949" : "white" }}>{pantalla.resultado}</h2>
        </div>
      </div>
      <div className="contenedor--botones">
        <div className="botones">
          {data.map(bot => (
            <Boton key={bot.id} id={bot.id} content={bot.content} color={mode ? bot.colorL : bot.colorD} colorT={mode ? bot.colorLT : bot.colorDT} onPress={onPress} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
