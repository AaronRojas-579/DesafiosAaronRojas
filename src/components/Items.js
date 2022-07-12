import React from 'react'
import ItemCount from './ItemCount'

const Button = (props)=>{
    return (
        <button type="button">Ver mas sobre {props.nombre}</button>
    )
  }
  
  const Clases = (props)=>{
    return(
    <>
      <hr/>
      <h2>{props.nombre}</h2>
      <div className="img_producto" style={{backgroundImage:`url(/img/${props.nombre}.png)`}} ></div>
      <div>Profesor : <spam>{props.profesor}</spam> </div>
      <div>Alumno : <spam>{props.alumno}</spam> </div>
      <div>Duración : <spam>{props.duracion} Semanas</spam> </div>
      <Button nombre = {props.nombre}></Button>
      <ItemCount></ItemCount>
    </>
    )
  }

const Items = ({item}) => {
  return (
    <>
        {
            item.map(item=> <Clases key={item.nombre} nombre={item.nombre} profesor={item.profesor} alumno={item.alumno} duracion={item.duracion}></Clases>)
        }
    </>
  )
}

export default Items