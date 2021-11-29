import React from 'react'

const People = (props) => {
    return (
        <div>
            <h2>People</h2>
            <ul>
                {props.results.map((x,i) => {
                    return (
                        <div key={i}>
                            <h1>{x.name}</h1>
                            <li>Height: {x.height}</li>
                            <li>Hair Color: {x.hair_color}</li>
                            <li>Gender: {x.gender}</li>
                            <li>Born: {x.birth_year}</li>
                        </div>
                        )}
                )}
            </ul>
            
        </div>
    )
}

export default People
