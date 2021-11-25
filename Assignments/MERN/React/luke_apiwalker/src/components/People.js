import React from 'react'

const People = (props) => {
    return (
        <div>
            <h2>People</h2>
            <ul>
                {props.results.map((x,i) => {
                    return props.sID <= 9 ?
                        <div key={i}>
                            <h1>{x[props.sID].name}</h1>
                            <li>Height: {x[props.sID].height}</li>
                            <li>Hair Color: {x[props.sID].hair_color}</li>
                            <li>Gender: {x[props.sID].gender}</li>
                            <li>Born: {x[props.sID].birth_year}</li>
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

export default People
