import React from 'react'

function TodoListt({todos,setTodos}) {
    const deleteItem= (idx)=> setTodos(todos.filter(item=> item.id!==idx))

    const isCompleted=(idx)=>{
        setTodos(todos.map(item=>(
          item.id===idx ? {...item,completed:!item.completed}:item
        )))
      }

  return (
    <div className='main'>
<ul className='todo-list'>
        {
          todos.map((todo)=>{
      return  <li key={todo.id} className={todo.completed ? "completed" : ""}>
        <div className='view'>
          <input type="checkbox" className='toggle'  onClick={()=>isCompleted(todo.id)}></input>
          <label>{todo.text} {todo.completed ? "completed" : ""}</label> 
          <button className='destroy'  onClick={()=>deleteItem(todo.id)}></button> 
        </div> 
      </li> 
          })
        }
        
      </ul>


    </div>
  )
}

export default TodoListt