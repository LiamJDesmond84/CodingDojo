import React, { useState, useEffect } from 'react'
import axios from "axios"

const AxiosPokemonApi = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=200")
            .then(res => setPokemon(res.data.results))
            .catch(err => console.log(err))
    }, [])

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h1>Pokemon Api</h1>
            <ul>
                {pokemon.map((x, y) => {
                    return <li key={y}>{x.name}</li>;
                })}
            </ul>
        </div>
    )
}

export default AxiosPokemonApi
