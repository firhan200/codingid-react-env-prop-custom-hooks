import { useState } from "react";

export default function useTodo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  return {
    todos,
    add: addTodo,
    remove: removeTodo,
  };
}
