import './App.css'
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer  saludo="Bienvenidos, acá encontraras todo para tu oficina"/>
     
    </div>
  );
}
export default App;
