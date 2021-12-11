import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "@reach/router";

const AxiosPokemonApi = () => {
    const [idResults, setIdResults] = useState([])
    const [search, setSearch] = useState("")
    const [id, setId] = useState(0)
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=200")
            .then(res => setPokemon(res.data.results))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => {console.log(res.data);setIdResults(res.data.abilities[0].ability);console.log(idResults)})
            .catch(err => console.log(err))
    }, [id])
// "homeworld": "https://swapi.dev/api/people/1/"
    return (
        <div>
            <input type="text" placeholder="Search By Id" onChange={(e) => setId(e.target.value)} />
            <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />

            {/* {idResults ?
            idResults.map((x,i) => {
                return (
                    <div>
                    <p>{x.name}</p>
                    </div>
                )
            }):
            null
        } */}
            <p><Link to={`/pokemon/${idResults.name}`}>{idResults.name}</Link></p>


            {pokemon.filter((x) => {
                if (search === "") {
                    return x
                } else if (x.name.toLowerCase().includes(search.toLowerCase())) {
                    return x
                }
            }).map((x,i) => {
                            return (
                                <div key={i}>
                <Link to={`/pokemon/${x.name}`}>{x.name}</Link>

                </div>
                )
            })}
        </div>
    )
}

export default AxiosPokemonApi
