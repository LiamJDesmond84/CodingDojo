import '../App.css';
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, navigate } from "@reach/router";

const ViewAllProducts = (props) => {
    const { hasBeenSubmitted, setHasBeenSubmitted, handleDeleteProduct } = props;
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res=> {
            console.log(res.data);
            setProducts(res.data);
            })
            .catch(err => console.log(err))
    }, [hasBeenSubmitted])

    // const deleteProduct = (id) => {
    //     axios.delete(`http://localhost:8000/api/products/${id}`)
    //         .then(res => res.json)
    //         .catch(err => console.log(err))
    //     navigate("/")
    // }

    const localHandleDeleteProduct = (id) => {
        handleDeleteProduct(id);
        setHasBeenSubmitted(!hasBeenSubmitted);
    };

    return (
        <div className="table">
            <h1>Products</h1>
            <table>
                <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                </thead>
            {products.map((x,i) => {
                return (
                        <tbody key={i}>
                            <tr>
                                <td>{x.title}</td>
                                <td>${x.price}</td>
                                <td>{x.description}</td>
                                <td><Link to={`/api/products/${x._id}`}>Details</Link></td>
                                <td><Link to={`/api/products/${x._id}/edit`}>Edit</Link></td>
                                <td><button onClick={() => localHandleDeleteProduct(x._id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    
                )
            })}
            </table>
        </div>
    )
}

export default ViewAllProducts
