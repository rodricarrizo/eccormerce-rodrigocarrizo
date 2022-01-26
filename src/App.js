
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from './components/item-list-conteiner/ItemListContainer';
const appStyles ={
  height : 20,
  Width : 20,
  backgroundColor : "red",
};
function App() {
  return (
    <div className="App">
      <NavBar />
  <h1>Hola,este es mi programa de ecommerce ,Rodrigo Carrizo</h1>

    <div style={appStyles} />
  <hr/>
  <ItemListContainer />

    </div>
  );
}

export default App;
