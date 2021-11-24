import React from 'react'

export const HelloColor = (props) => {
    return (
        <div style={{backgroundColor: `${props.bg}` }}>
            <h1>The word is <span style={{color: `${props.color}`}}>{props.word}</span></h1>
        </div>
    )
}
