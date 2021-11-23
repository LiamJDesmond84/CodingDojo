import React, { useState } from 'react'

const MyTodo = () => {
    const [item, setItem] = useState("")
    const [itemList, setItemList] = useState([])
    const [completed, setCompleted] = useState(false)

    const createItem = (e,newItem) => {
        e.preventDefault();
        setItemList([...itemList, item])
        setItem("")
    }

    const isCompleted = (index) => {
        setCompleted(value => !value)
    }

    const handleTodoDelete = (index) => {
        const filteredTodos = itemList.filter((_todo, i) => {
            return i !== index;
            });
            
            setItemList(filteredTodos)
        }


    
    return (
        <div>
            <form onSubmit={createItem}>
                <label htmlFor={item}></label>
                <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />

                <input type="submit" />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Finished?</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {itemList.map((x,i) => {
                            return completed ?
                                <tr className="strikeout">
                                <td>{x}</td>
                                <td key={i}><input type="checkbox"  /></td>
                                <td><button onClick={() => {handleTodoDelete(i)}} checked={completed}>Delete</button></td>
                                {/*onChange={isCompleted(i)}*/}
                                </tr>:
                                <tr className="none">
                                <td>{x}</td>
                                <td key={i}><input type="checkbox" onChange={isCompleted} /></td>
                                <td><button onClick={() => {handleTodoDelete(i)}}>Delete</button></td>
                                </tr>
                            }
                            )}
                        
                    
                </tbody>

            </table>
        </div>
    )
}

export default MyTodo
