import React from 'react'

const Species = (props) => {
    return (
        <div>
            <h2>Species</h2>
            <ul>
                {props.results.map((x,i) => {
                    return props.sID <= 9 ?
                        <div key={i}>
                            <h1>{x[props.sID].name}</h1>
                            <li>Classification: {x[props.sID].classification}</li>
                            <li>Designation: {x[props.sID].designation}</li>
                            <li>Language: {x[props.sID].language}</li>
                            <li>Skin Colors: {x[props.sID].skin_colors}</li>
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

export default Species
