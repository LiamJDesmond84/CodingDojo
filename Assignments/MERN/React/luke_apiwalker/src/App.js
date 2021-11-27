
import './App.css';
import Navbar from './components/Navbar';
import { Router } from "@reach/router";
import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';
import React, { useState } from 'react'



function App() {
  const [results, setResults] = useState([])
  const [sID, setSID] = useState(0)

  const handleSearchID = (id) => {
    setSID(id);
  }

  const searchResults = (id, query) => {
    setSID(id);
    setResults([query]);

  }




  return (
    <div className="App">
      <Navbar searchResults={searchResults} handleSearchID={handleSearchID} />
      <Router>
        <People path="/people" results={results} sID={sID} />
        <Planets path="/planets" results={results} sID={sID} />
        <Species path="/species" results={results} sID={sID} />
      </Router>
    </div>
  );
}

export default App;
