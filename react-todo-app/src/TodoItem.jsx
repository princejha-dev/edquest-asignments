function TodoItem({ todo, deleteTodo }) {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;