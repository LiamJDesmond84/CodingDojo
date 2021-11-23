import React, { useContext } from 'react'
import NameContext from '../context/NameContext';

const Form = () => {
    const { name, setName } = useContext(NameContext)
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default Form
