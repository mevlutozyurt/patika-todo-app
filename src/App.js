import logo from './logo.svg';
import './App.css'; 
import Form from './components/Form';
import TodoList from './components/TodoList';
import TodoListt from './TodoListt';
import Footer from './components/Footer';

import {useState, useEffect} from 'react';




function App() { 
  const [todos,setTodos]=useState([{text:"TODO-1",completed:false,id:Math.random()*1000}]);
  const [status, setStatus]= useState('');
  const [filteredTodos, setFilteredTodos]= useState([]);

  useEffect(() => {
    const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

    filterHandler()
  }, [todos, status])

  return (
    <div className="todoapp">
      <Form todos={todos} setTodos={setTodos} ></Form>
      <ul className='todo-list'>
        {
          filteredTodos.map((todo)=>{
      return <TodoList
        key={todo.id}
        status={status}
        todo={todo}
        text={todo.text}
        todos={todos}
        setTodos={setTodos}        
        /> 
          })
        }
        
      </ul>

 
      <Footer   status= {status} setStatus={setStatus}  todos={todos}  setTodos={setTodos}></Footer>
      {/* <TodoListt todos={todos}  setTodos={setTodos}   ></TodoListt> */}
    </div>
  );
}

export default App;
