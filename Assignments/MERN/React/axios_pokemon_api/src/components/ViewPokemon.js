import React from 'react'
import { Link } from "@reach/router";

const ViewPokemon = (props) => {
    return (
        <div>
            {props.name}
            <hr />
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default ViewPokemon
