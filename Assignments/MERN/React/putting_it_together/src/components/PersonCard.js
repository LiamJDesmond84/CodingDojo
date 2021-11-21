
import React, { useState } from 'react'

const PersonCard = ({firstName, lastName, age, hairColor}) => {
    const [birthday, setBirthday] = useState(age)
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <div>
                <p>Age: {birthday}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={() => setBirthday(birthday + 1)}>Birthday Button for {firstName} {lastName}</button>
            </div>
        </div>
    )
}

export default PersonCard