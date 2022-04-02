
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer';
import ItemList from './Components/ItemList';


function App() {
  return (

    <div className="App">
      <section>
        <NavBar/>
        <ItemListContainer/>
       
       
      </section>
     
    </div>
  );
}

export default App;
