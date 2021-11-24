import { Router } from "@reach/router";
import './App.css';
import Hello from "./components/Hello";
import { HelloColor } from "./components/HelloColor";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Hello path="/:word" />
        <HelloColor path="/:word/:color/:bg" />
      </Router>
    </div>
  );
}

export default App;
