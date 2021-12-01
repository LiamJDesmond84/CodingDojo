import '../App.css';
import React, { useEffect } from 'react'
import axios from "axios"
import { Link } from "@reach/router";
import DeleteButton from './DeleteButton';

const ViewAllProducts = (props) => {
    const { productList, setProductList } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res=> {
            console.log(res.data);
            setProductList(res.data);
            })
            .catch(err => console.log(err))
    }, [])

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
            {productList.map((x,i) => {
                return productList ?
                        <tbody key={i}>
                            <tr>
                                <td>{x.title}</td>
                                <td>${x.price}</td>
                                <td>{x.description}</td>
                                <td><Link to={`/api/product/${x._id}`}>Details</Link></td>
                                <td><Link to={`/api/product/${x._id}/edit`}>Edit</Link></td>
                                {/* <td><button onClick={() => deleteProduct(x._id)}>Delete</button></td> */}
                                <td><DeleteButton personId={x._id} successCallback={()=>props.removeFromDom(x._id)}/></td>
                            </tr>
                        </tbody>:
                        null
            })}
            </table>
        </div>
    )
}

export default ViewAllProducts

