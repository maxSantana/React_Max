
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar.jsx'
import ItemListContainer from './Components/Items/ItemListContainer.jsx';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
        
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} /> 
     {/* <Route path="/Cart" element={<Cart/>}/> */}

      
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
