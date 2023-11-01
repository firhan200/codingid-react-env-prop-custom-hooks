import { useState } from "react";
import useTodo from "../hooks/useTodo";

const TodoList = () => {
  const { todos, add, remove } = useTodo();

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    add(e.target[0].value);
    e.target[0].value = "";
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
