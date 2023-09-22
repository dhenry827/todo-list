import React, { useState } from 'react'
import '../src/App.css'



const Todo = () => {
  const [value, setValue] = useState("")
  const [todo, setTodo] = useState([])

  const handleTodo = () => {
    if (value == "") {
      return
    }

    setTodo([...todo, value])
  }

  const handleEdit = () => {

  }

  const handleUpdate = (index) => {
    let updateTodo = [...todo]
    updateTodo[index] = value
    // console.log(updateTodo[index])
    setTodo(updateTodo)
  }

  const handleDelete = () => {
    let spreadTodo = [...todo]
    for (let i = 0; i < spreadTodo.length; i++) {
      if (value == spreadTodo[i]) {
        spreadTodo.splice(i, 1)
      }
    }
    setTodo(spreadTodo)
  }



  return (
    <div>
      <h1>Todo List</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter Task' /><br></br>
      <input type='submit' className="submit" onClick={handleTodo} />
      <button onClick={handleDelete}>Delete</button><br></br>
      <div>
        <h2>Tasks</h2><br></br>
        <ul>
          {todo.map((todoItems, index) => (
            <li id={index} key={index}>{todoItems}
              <button>edit</button>
              <button onClick={handleUpdate}>?</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo

// Add task counter, ,click to cross out, slide to delete(react-swipe-to-delete-component), check to delete, task priority