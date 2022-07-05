import './App.css';
import "./styles/styles.css"
import NavBar  from './components/NavBar';
import ItemCount from "./components/ItemCount";

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

function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <h1>Pagina Web Aaron Rojas</h1>
      <Clases nombre="Javascript" alumno="Aaron Rojas" profesor="Alex Marin" duracion={7}></Clases>
      <Clases nombre="HTML" alumno="Aaron Rojas" profesor="Alex Marin" duracion={7}></Clases>
      <Clases nombre="SCSS" alumno="Aaron Rojas" profesor="Alex Marin" duracion={7}></Clases>
      <Clases nombre="ReactJS" alumno="Aaron Rojas" profesor="Alex Marin" duracion={7}></Clases>
    </div>
  );
}

export default App;