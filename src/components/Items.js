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
      <div>Especie : {props.profesor}</div>
      <div>Sexo : {props.alumno}</div>
      <div>Lugar de Nacimiento : Tierra</div>
      <Button nombre = {props.nombre}></Button>
      <ItemCount></ItemCount>
    </>
    )
  }

const Items = ({item}) => {
  return (
    <>
      <Clases nombre={item.name} profesor={item.species} alumno={item.gender} imagen={item.image}/>
    </>
  )
}

export default Items