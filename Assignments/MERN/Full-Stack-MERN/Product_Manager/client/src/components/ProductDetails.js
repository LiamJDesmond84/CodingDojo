import axios from "axios"
import React, { useState, useEffect } from 'react'
import { Link } from "@reach/router";

const ProductDetails = (props) => {
    const [productDeets, setProductDeets] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {
            console.log(res.data);
            setProductDeets({...res.data})
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <Link to="/">Home</Link>
            <h3>Title</h3>
            <p>{productDeets.title}</p>
            <h3>Price</h3>
            <p>${productDeets.price}</p>
            <h3>Description</h3>
            <p>{productDeets.description}</p>
        </div>
    )
}
export default ProductDetails