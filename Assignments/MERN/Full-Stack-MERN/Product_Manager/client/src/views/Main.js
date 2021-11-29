
import ProductForm from '../components/ProductForm';
import React, { useState } from 'react'
import ViewAllProducts from '../components/ViewAllProducts';

const Main = (props) => {
    const { handleDeleteProduct } = props;
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    return (
        <div>
            <ProductForm setHasBeenSubmitted={setHasBeenSubmitted} hasBeenSubmitted={hasBeenSubmitted} />
            <hr />
            <ViewAllProducts hasBeenSubmitted={hasBeenSubmitted} setHasBeenSubmitted={setHasBeenSubmitted} handleDeleteProduct={handleDeleteProduct} />
        </div>
    )
}

export default Main
