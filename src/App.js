import './App.css';
import "./styles/styles.css"
import NavBar  from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <h1>Pagina Web Aaron Rojas</h1>
      <ItemDetailContainer/>

    </div>
  );
}

export default App;