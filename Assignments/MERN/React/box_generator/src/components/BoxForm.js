import React, { useState } from 'react'

const BoxForm = (props) => {
    const [color, setColor] = useState("")

    const handleForm = (e) => {
        e.preventDefault();
        props.sendColor(color);
        setColor("")
}

    return (

            <form onSubmit={handleForm}>
                <label htmlFor="color">Color: </label>
                <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <input type="submit" value="Add Box" />
            </form>

    )
}

export default BoxForm
