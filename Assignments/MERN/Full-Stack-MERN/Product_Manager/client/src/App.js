
import './App.css';
import { Router, navigate } from "@reach/router";
import axios from "axios";
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
import UpdateProduct from './components/UpdateProduct';

function App() {
  const handleDeleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((response) => {
        console.log("Deleted", response);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Router>
      <Main path="/" handleDeleteProduct={handleDeleteProduct} />
      <ProductDetails path="/api/products/:id" handleDeleteProduct={handleDeleteProduct} />
      <UpdateProduct path="/api/products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
