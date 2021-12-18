
import './App.css';
// import MyTodo from './components/MyTodo';

import React, { useState } from 'react'
import Todo from './components/Todo';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if (newTodo.length === 0){
      return
    }
    
    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem])
    setNewTodo("");
  }

  const handleTodoDelete = (index) => {
    const filteredTodos = todos.filter((_todo, i) => {
      return i !== index;
    });
    
    setTodos(filteredTodos)
  }

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.filter((x, i) => {
      if(index === i) {
        x.complete = !x.complete;
        // To avoid mutating the todo(x) directly do this
        // const updatedTodoExample = {...x, complete: !x.complete}
        // return updatedTodoExample;
      } 
      return x;
    });
    setTodos(updatedTodos);
  }

  return (
    <div style={{textAlign: 'center'}}>



      <form onSubmit={(e) => {handleNewTodoSubmit(e)}}>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr/>




      {todos.map((x,i) => {


        return (
          <Todo key={i} x={x} i={i} handleToggleComplete={handleToggleComplete} handleTodoDelete={handleTodoDelete} />
      );
    })}


    </div>
  );
}

export default App;

