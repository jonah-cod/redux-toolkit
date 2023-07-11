import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";

const Todo = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleComplete = ()=>{
    dispatch(updateTodo(todo.id));
  }
  return (
    <div className={`todo ${todo.status}`}>
      <span>{todo.task}</span>
      <div className="actions">
        <i className="fas fa-check" onClick={handleComplete}></i>
        <i className="fas fa-trash delete" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Todo;
