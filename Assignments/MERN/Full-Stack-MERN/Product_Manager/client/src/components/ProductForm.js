import React from 'react'
// import axios from 'axios';
const ProductForm = (props) => {
    const { submitHandler, product, setProduct } = props;

    const inputHandler = (e) => {
        let newStateObject = {...product};
        newStateObject[e.target.name] = e.target.value;
        setProduct(newStateObject);
    }
    
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title:</label><br/>
                    <input value={product.title} type="text" name="title" onChange = {inputHandler}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input value={product.price} type="text" name="price" onChange = {inputHandler}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <textarea value={product.description} type="text" name="description" onChange = {inputHandler}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default ProductForm;