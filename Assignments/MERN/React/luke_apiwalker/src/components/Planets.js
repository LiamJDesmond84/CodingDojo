import React from 'react'

const Planets = (props) => {
    return (
        <div>
            <h2>Planets</h2>
            <ul>
                {props.results.map((x,i) => {
                    return props.sID <= 9 ?
                        <div key={i}>
                            <h1>{x[props.sID].name}</h1>
                            <li>Climate: {x[props.sID].climate}</li>
                            <li>Terrain: {x[props.sID].terrain}</li>
                            <li>Population: {x[props.sID].population}</li>
                            <li>Orbital Period: {x[props.sID].orbital_period}</li>
                        </div>:
                        <div>
                            <img style={{width: "500px"}} src="https://memegenerator.net/img/instances/47132114/these-arent-the-droids-youre-looking-for.jpg" alt="droids" />
                        </div>
                    }
                    )}
            </ul>
        </div>
    )
}

export default Planets