import React from 'react'

const Todo = (props) => {
    const todoClasses = ["bold", "italic"];
    if(props.x.complete) {
        todoClasses.push("line-through")
    }
    return (
        <div style={{margin: "20px"}}>
            <input type="checkbox" 
            checked={props.x.complete} 
            onChange={(e) => {props.handleToggleComplete(props.i)}} />
            <span 
            className={todoClasses.join(" ")}>{props.x.text}</span>
            <button 
            onClick={(e) => {props.handleTodoDelete(props.i)}}>Delete</button>
        </div>
    )
}

export default Todo
