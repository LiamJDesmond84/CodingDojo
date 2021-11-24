import React from 'react'

const Hello = (props) => {
    if(isNaN(props.word)) {
    return (
        <div>
            <h1>The word is {props.word}</h1>
        </div>
        )
    }
    else {
    return (
        <div>
            <h1>The number is {props.word}</h1>
        </div>
        )
    }
}

export default Hello
