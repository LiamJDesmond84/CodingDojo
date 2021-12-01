import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';
const UpdateProduct = (props) => {
    const { id } = props;
    const [updatedProduct, setUpdatedProduct] = useState({title: "", price: "", description: ""})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {console.log(res.data);setUpdatedProduct(res.data);})
            .catch(err => console.log(err))
    }, [])

    const updateProductHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, updatedProduct)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        navigate("/");
    }

    return (
        <div>
            <h1>Update a Person</h1>
            <ProductForm product={updatedProduct} setProduct={setUpdatedProduct} submitHandler={updateProductHandler} />
            <hr />
            <DeleteButton personId={updatedProduct._id} successCallback={() => navigate("/")} />
        </div>
    )
}

export default UpdateProduct;