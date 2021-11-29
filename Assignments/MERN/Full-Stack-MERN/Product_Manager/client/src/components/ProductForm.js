import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")
    const {hasBeenSubmitted, setHasBeenSubmitted} = props

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                setTitle("");
                setPrice(0);
                setDescription("");
                setHasBeenSubmitted(!hasBeenSubmitted)
        })
            .catch(err => console.log(err))
    }
    

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title:</label><br/>
                    <input value={title} type="text" onChange = {(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input value={price} type="text" onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <textarea value={description} type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default ProductForm;