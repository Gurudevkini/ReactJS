import { useState } from "react";
import AppName from "./Components/appname";
import AddTodo from "./Components/addtodo";
import TodoItem from "./Components/Todoitem";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [
        {
      name: 'Buy Milk',
      DueDate: "4/10/2023",
    },
    {
      name:"Go to College",
      DueDate:"4/10/2023",
    },
    {
      name:"MY name is guru",
      DueDate:"4/10/2023",
    },
     {
      name:"MY name is guru",
      DueDate:"4/10/2023",
    }
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
     <TodoItems todoItems ={todoItems}></TodoItems>
    
</center>
  );
}

export default App;
/* IMRPOVEMENTS WE ARE DOING IN THIS CODE IS 
1. TODO ITEM ARE SPEARTE MAKE IT ONE
2> MAKE THE DATA NOT HARD CODED INSTED MAKE IT A VARIABLE */