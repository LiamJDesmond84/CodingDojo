import React from 'react'

const PersonCard = ({firstName, lastName, age, hairColor}) => {
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <div>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        </div>
    )
}

export default PersonCard
