
import './App.css';
import AxiosPokemonApi from './components/AxiosPokemonApi';
import { Router } from "@reach/router";
import ViewPokemon from './components/ViewPokemon';
import ViewSW from './components/ViewSW';

function App() {
  return (
    <div className="App">
      
      <Router>
        <AxiosPokemonApi path="/"/>
        <ViewPokemon path="/pokemon/:name" />
        <ViewSW path="/sw/:name" />
      </Router>
    </div>
  );
}

export default App;
