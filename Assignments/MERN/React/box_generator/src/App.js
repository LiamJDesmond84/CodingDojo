
import './App.css';
import BoxForm from './components/BoxForm';
import BoxShow from './components/BoxShow';
import React, { useState } from 'react'

function App() {
  const [currentColor, setCurrentColor] = useState([])


  const addColors = (newColor) => {
    setCurrentColor([...currentColor, newColor])
  }

  return (
    <div className="App">
      <BoxForm sendColor={addColors} />
      <BoxShow updatedColor={currentColor} />
    </div>
  );
}

export default App;
