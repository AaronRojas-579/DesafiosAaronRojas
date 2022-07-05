import React, {useState} from 'react'

const ItemCount = ()=> {
    const [stock,setStock] = useState(5);
    const [cantidad,setCantidad] = useState (0);
    const ClicSumar = ()=>{
        if(cantidad >= 0 && cantidad < 5){
            setCantidad(cantidad + 1);
            setStock(stock - 1);
        }
    }
    const ClicRestar = ()=>{
        if(cantidad > 0 && cantidad <= 5){
            setCantidad(cantidad - 1);
            setStock(stock + 1);
        }
    }
    return(
        <>
        <div className ="container_carrito">
         <div className="container_botones">
            <h4>Cantidad que desea llevar: {cantidad}</h4>
            <button onClick={ClicSumar}> + </button>
            <button onClick={ClicRestar}> - </button>
         </div>
            <h4 className='stock_text'>Stock disponible: {stock}</h4>
        </div>
        </>
    );
}
export default ItemCount