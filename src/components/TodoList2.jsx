import useTodo from "../hooks/useTodo";

export default function TodoList2() {
  const { add } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    add(e.target[0].value);
    e.target[0].value = "";
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo" />
        <button>Add</button>
      </form>
    </div>
  );
}
