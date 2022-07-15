import React, {useEffect, useState} from 'react'
import Items from '../components/Items'
const datos = [
    {
        id:1,
        name:"Rick Sanchez",
        species:"Humano",
        gender:"Masculino",
        location:{
            name:"Citadel of Ricks"
        },
        image:"https://rickandmortyapi.com/api/character/avatar/361.jpeg"
    },
    {
        id:2,
        name:"Morty Smith",
        species:"Humano",
        gender:"Masculino",
        location:{
            name:"Citadel of Ricks"
        },
        image:"https://rickandmortyapi.com/api/character/avatar/361.jpeg"
    },    {
        id:3,
        name:"Summer Smith",
        species:"Humano",
        gender:"Masculino",
        location:{
            name:"Citadel of Ricks"
        },
        image:"https://rickandmortyapi.com/api/character/avatar/361.jpeg"
    },
    {
        id:4,
        name:"Jerry Smith",
        species:"Humano",
        gender:"Masculino",
        location:{
            name:"Citadel of Ricks"
        },
        image:"https://rickandmortyapi.com/api/character/avatar/361.jpeg"
    },
    {
        id:5,
        name:"Abradolf Lincler",
        species:"Humano",
        gender:"Masculino",
        location:{
            name:"Citadel of Ricks"
        },
        image:"https://rickandmortyapi.com/api/character/avatar/361.jpeg"
    },    {
        id:6,
        name:"Adjudicator Rick",
        species:"Humano",
        gender:"Masculino",
        location:{
            name:"Citadel of Ricks"
        },
        image:"https://rickandmortyapi.com/api/character/avatar/361.jpeg"
    }
]

const customFetch = (time,task)=>{
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            res(task);
            console.log(task);
        },time)
    })
}

const ItemDetailContainer = () => {
    const [data,setData] =useState([])
    // promesa.then((res)=>setData(res));
    useEffect(()=>{
        customFetch(2000,datos[4])
        .then(res => setData(res))
        .catch(res => console.log(res));
    },[]);

  return (
    <>
        <Items item={data}/>
    </>
  )
}

export default ItemDetailContainer