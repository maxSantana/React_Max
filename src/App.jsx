import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Container';
import ItemListContainer from './Components/ItemListContainer';


function App() {
  return (

    <div className="App">
      <section>
        <NavBar/>
        <Container />
        <ItemListContainer />
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome <code></code> to eCommerce MaxiSantana.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
