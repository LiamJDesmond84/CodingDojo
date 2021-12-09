import React, { useState, useEffect } from 'react'

const PokemonAPI = () => {
    const [search, setSearch] = useState("")
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=200")
        .then(res => res.json())
        .then(res => {setPokemon(res.results)})
        .catch(err => {console.log("err", err)})
    }, [])

    return (
        <div>
            <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
            {pokemon.filter((x) => {
                if (search === "") {
                    return x
                } else if (x.name.toLowerCase().includes(search.toLowerCase())) {
                    return x
                }
            }).map((x,i) => {
                            return (
                <div key={i}>{x.name}</div>
                )
            })}
        </div>
    )
}

export default PokemonAPI
