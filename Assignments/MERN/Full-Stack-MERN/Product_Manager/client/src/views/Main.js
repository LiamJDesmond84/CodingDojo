
// import ProductForm from '../components/ProductForm';
import React, { useState } from 'react'
import ViewAllProducts from '../components/ViewAllProducts';
import CreateProduct from '../components/CreateProduct';

const Main = (props) => {
    const [productList, setProductList] = useState([])
    // const [newProduct, setNewProduct] = useState({})

    const removeFromDom = (personId) => {
        setProductList(productList.filter(person => person._id !== personId));
    }

    return (
        <div>
            <CreateProduct productList={productList} setProductList={setProductList} />
            <hr />
            <ViewAllProducts productList={productList} setProductList={setProductList} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Main

// newProduct={newProduct} setNewProduct={setNewProduct}