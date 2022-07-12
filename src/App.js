import './App.css';
import "./styles/styles.css"
import NavBar  from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <h1>Pagina Web Aaron Rojas</h1>
      <ItemListContainer/>

    </div>
  );
}

export default App;