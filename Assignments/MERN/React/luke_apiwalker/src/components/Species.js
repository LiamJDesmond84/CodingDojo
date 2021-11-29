import React from 'react'

const Species = (props) => {
    return (
        <div>
            <h2>Species</h2>
            <ul>
                {props.results.map((x,i) => {
                    return (
                        <div key={i}>
                            <h1>{x.name}</h1>
                            <li>Classification: {x.classification}</li>
                            <li>Designation: {x.designation}</li>
                            <li>Language: {x.language}</li>
                            <li>Skin Colors: {x.skin_colors}</li>
                        </div>
                        )}
                )}
            </ul>
        </div>
    )
}

export default Species
