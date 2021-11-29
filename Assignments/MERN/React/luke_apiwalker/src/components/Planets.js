import React from 'react'

const Planets = (props) => {
    return (
        <div>
            <h2>Planets</h2>
            <ul>
                {props.results.map((x,i) => {
                    return (
                        <div key={i}>
                            <h1>{x.name}</h1>
                            <li>Climate: {x.climate}</li>
                            <li>Terrain: {x.terrain}</li>
                            <li>Population: {x.population}</li>
                            <li>Orbital Period: {x.orbital_period}</li>
                        </div>
                        )}
                )}
            </ul>
        </div>
    )
}

export default Planets