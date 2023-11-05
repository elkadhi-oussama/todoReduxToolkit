import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../Css/Todo.css";
import { useDispatch } from "react-redux";
import { addTodoList } from "../Redux/Slice/todoSlice";

const Todo = () => {
  const [newTodo, setnewTodo] = useState({
    id: Math.random(),
    title: "",
    finished: false,
  });
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(addTodoList(newTodo));
    // Reset the input value
    setnewTodo({
      id: Math.random(),
      title: "",
      finished: false,
    });
  };

  return (
    <div className="todo">
      <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        value={newTodo.title}
        onChange={(e) => setnewTodo({ ...newTodo, title: e.target.value })}
      />
      <div className="btnTodo">
        <Button variant="dark" onClick={handleAddTodo}>
          ADD
        </Button>
      </div>
    </div>
  );
};

export default Todo;
