
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar.jsx'
import ItemListContainer from './Components/Items/ItemListContainer.jsx';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
        
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      {/* <Footer/> */}
      <Routes>

      <Route exact path="/" element={<ItemListContainer/>}/>
      <Route exact path="/itemDetail" element={<ItemDetailContainer/>}/>
      
    
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
