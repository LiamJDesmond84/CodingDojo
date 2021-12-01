
import './App.css';
import { Router } from "@reach/router";

import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import UpdateProduct from './components/UpdateProduct';

function App() {


  return (
    <div className="App">
      <Router>
      <Main path="/" />
      <ProductDetails path="/api/product/:id"  />
      <UpdateProduct path="/api/product/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
