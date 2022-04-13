
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar.jsx'
import ItemListContainer from './Components/Items/ItemListContainer.jsx';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
        
    <div className="App">
      
      <NavBar/>
      {/* <Footer/> */}
      

      <ItemListContainer/>
    
      <ItemDetailContainer/>
      
   
    </div>
  )
}

export default App;
