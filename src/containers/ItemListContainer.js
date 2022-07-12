import React, {useState} from 'react'
import Items from '../components/Items'

const curso = [
    {
        nombre:"Javascript",
        profesor:"Rodrigo Salas",
        alumno:"Aaron Rojas",
        duracion:7
    },
    {
        nombre:"HTML",
        profesor:"José Amador",
        alumno:"Leandro Aguilera",
        duracion:12
    },
    {
        nombre:"SCSS",
        profesor:"Alex Marin",
        alumno:"Alejandra Salvatierra",
        duracion:6
    },
    {
        nombre:"ReactJS",
        profesor:"Christian Rodriguez",
        alumno:"Aaron Rojas",
        duracion:8
    }
]

const promesa = new Promise ((res,rej)=>{
    setTimeout(()=>{
        res(curso);
    },2000)
})

const ItemListContainer = () => {
    const [data,setData] =useState([])
    promesa.then((res)=>setData(res));

  return (
    <>
        <Items item={data}></Items>
    </>
  )
}

export default ItemListContainer