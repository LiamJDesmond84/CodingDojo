import React, { useState, useEffect } from 'react'

const PokemonAPI = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=200")// /pokemon is the model, models are plural
        .then(res => {
            res.json()
            .then(res => {
                setPokemon(res.results)
            })
            .catch(err => {console.log("err", err)
            })
            })
        .catch(err => {console.log("err", err)})
    }, [])

    return (
        <div>
            {pokemon.map((x,i) => {
                return (
                <div key={i}>{x.name}</div>
                )
            })}
        </div>
    )
}

export default PokemonAPI
