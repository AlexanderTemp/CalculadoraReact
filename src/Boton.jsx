const Boton = ({id, content, color, colorT, onPress}) => {
  return (
    <div className="calc-boton" onClick={()=>onPress(id)} style={{color: colorT, backgroundColor: color}}>
        <h4>{content}</h4>
    </div>
  )
}
export default Boton