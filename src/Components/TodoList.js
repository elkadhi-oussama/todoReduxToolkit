import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/Slice/todoSlice";
import InpuntCom from "./InpuntCom";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoData);
  const dispatch = useDispatch();
  return (
    <>
      {todoList.map((todo) => {
        return (
          <div key={todo.id} className="todo">
            <InpuntCom todo={todo} />
            <div className="btnTodo">
              {todo.finished ? (
                <i
                  className="fa-solid fa-thumbs-up fa-2xl"
                  style={{ color: "#57b259" }}
                  onClick={() =>
                    dispatch(
                      updateTodo({
                        id: todo.id,
                        todo: { ...todo, finished: !todo.finished },
                      })
                    )
                  }
                ></i>
              ) : (
                <i
                  className="fa-solid fa-circle-check fa-2xl"
                  style={{ color: "#000000" }}
                  onClick={() =>
                    dispatch(
                      updateTodo({
                        id: todo.id,
                        todo: { ...todo, finished: !todo.finished },
                      })
                    )
                  }
                ></i>
              )}
              <i
                className="fa-solid fa-circle-xmark fa-2xl"
                style={{ color: "#eb0000" }}
                onClick={() => dispatch(deleteTodo(todo.id))}
              ></i>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
