import { useState } from "react";
import AppName from "./Components/appname";
import AddTodo from "./Components/addtodo";
import TodoItem1 from "./Components/Todoitem1";
import TodoItem2 from "./Components/Todoitem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
<div className="item-Container">
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
      </div>
    
</center>
  );
}

export default App;