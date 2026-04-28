import { useState } from 'react';

function TodoInput({ addTodo }) {
  // State for the input field
  const [inputValue, setInputValue] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue(''); // Clear the input after adding
    }
  };

  return (
    <div className="todo-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoInput;