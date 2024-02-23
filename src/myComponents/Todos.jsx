import React from 'react'
import TodoItem from "../myComponents/TodoItem";

// rafc->
const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container mt-4 mb-5">
      <h3 className='my-3'>Todo's List :</h3>
      {todos.length === 0? <h5 className='text-center'>"No Todos to display"</h5>:
        todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.Sno} onDelete={onDelete}/>
        })
      }
    </div>
  )
}

export default Todos