import React from "react";
import { useState } from "react";

function Form({todos,setTodos}) {
  const [form, setForm] = useState("");

  const onSubmitTodo = (event) => {
    event.preventDefault();
    if (form === "") {
      alert("Bir Todo Ekleyin");
      return false;
    }
    setTodos([...todos,{text:form,completed:false,id:Math.random()*1000}]);
    setForm('')
  };

  const onChangeForm=(event)=>{
    setForm(event.target.value);
    console.log(form);
  }

  

  return (
    <div >
      <header className="header"></header>
      <h1>todos</h1>
      <form className="main"> 
     
        <input
          className="new-todo"
          placeholder="What needs to be done"
          autoFocus
          value={form}
          onChange={onChangeForm}
        ></input>
        <button onClick={onSubmitTodo}></button>
         
     
      </form>
    </div>
  );
}

export default Form;
