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
      <div className="img_producto" style={{backgroundImage:`url(${props.imagen})`}} ></div>
      <div>Especie : <spam>{props.profesor}</spam> </div>
      <div>Sexo : <spam>{props.alumno}</spam> </div>
      <div>Lugar de Nacimiento : <spam>{props.duracion}</spam> </div>
      <Button nombre = {props.nombre}></Button>
      <ItemCount></ItemCount>
    </>
    )
  }

const Items = ({item}) => {
  return (
    <>
      <Clases nombre={item.name} profesor={item.species} alumno={item.gender} imagen={item.image} duracion={item.location.name} ></Clases>
    </>
  )
}

export default Items