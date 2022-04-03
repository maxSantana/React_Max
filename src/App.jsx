
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar.jsx'
import ItemListContainer from './Components/Items/ItemListContainer';



function App() {
  return (

    <div className="App">
     
        <NavBar/>
        <ItemListContainer/>
     
    </div>
  )
}

export default App;
