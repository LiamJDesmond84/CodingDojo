
import React, { useContext } from 'react'
import NameContext from '../context/NameContext';


const style = {
    background: "purple",
    display: "flex",
    padding: "20px",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "white",
    fontWeight: "bold"
};
const Navbar = () => {
    const { name } = useContext(NameContext)
    return (
        <div style={style}>
            <h1>Hello {name}!</h1>
        </div>
    )
}

export default Navbar
