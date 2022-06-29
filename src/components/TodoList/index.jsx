import React from 'react'

function TodoList({todos,setTodos,todo}) {
const isCompleted=()=>{
  setTodos(todos.map(item=>(
    item.id===todo.id ? {...item,completed:!item.completed}:item
  )))
}
  const deleteItem= ()=> setTodos(todos.filter(item=> item.id!==todo.id))

  return (
    <div className='Main'>
      <li key={todo.id} className={todo.completed ? "completed" : ""}>
        <div className='view'>
          <input type="checkbox" className='toggle' onClick={isCompleted} ></input>
          <label>{todo.text} {todo.completed ? "completed" : ""}</label>
           
          <button className='destroy' onClick={deleteItem}></button>

        </div>

      </li>

    </div>
  )
}

export default TodoList;