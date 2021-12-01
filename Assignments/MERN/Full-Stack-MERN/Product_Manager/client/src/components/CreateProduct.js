import React, { useState } from 'react'
import ProductForm from './ProductForm'
import axios from "axios"

const CreateProduct = (props) => {
    const { productList, setProductList } = props;
    const [newProduct, setNewProduct] = useState({title: "", price: 0, description: ""})
    
    const newProductHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', newProduct)

            .then(res => {console.log(res);
            setProductList([...productList, res.data])
            setNewProduct(({title: "", price: 0, description: ""}))
        })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <ProductForm submitHandler={newProductHandler} product={newProduct} setProduct={setNewProduct} />
        </div>
    )
}

export default CreateProduct
