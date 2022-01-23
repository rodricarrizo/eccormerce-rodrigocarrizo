import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/Navbar/NavBar";
const appStyles ={
  height : 1500,
  Width : 1500,
  backgroundColor : "red",
};
function App() {
  return (
    <div className="App">
      <NavBar />
  <h1>Hola,este es mi programa de ecommerce ,Rodrigo Carrizo</h1>

    <div style={appStyles} />
  

    </div>
  );
}

export default App;
