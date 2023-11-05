import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Components/Todo";
import "./Css/App.css"
import TodoList from "./Components/TodoList";

const App = () => {
  return <>
  <h1 className="headerApp"> Todo App </h1>
    <Todo/>
    <TodoList/>
  </>;
};

export default App;
